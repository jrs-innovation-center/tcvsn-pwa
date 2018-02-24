require('dotenv').config()
const pkg = require('./package.json')
const express = require('express')
const app = express()
const {
  createResource,
  getResource,
  updateResource,
  deleteResource,
  listResource,
  findResource,
  createCategory,
  getCategory,
  getAllCategories,
  updateCategory,
  deleteCategory,
  findCategory,
  checkCategoryId
} = require('./dal')
const port = process.env.PORT || 5000
const HTTPError = require('node-http-error')
const bodyParser = require('body-parser')
const {
  propOr,
  pathOr,
  compose,
  not,
  isEmpty,
  is,
  prop,
  omit,
  merge,
  __,
  join,
  path,
  split,
  trim,
  last
} = require('ramda')
const checkRequiredFields = require('./lib/check-required-fields')
const cors = require('cors')
const checkJwt = require('./jwt')

const postResourceRequiredFieldCheck = checkRequiredFields([
  'categoryId',
  'name',
  'formalName',
  'shortDesc',
  'purpose',
  'website'
])
const putResourceRequiredFieldCheck = checkRequiredFields([
  '_id',
  '_rev',
  'type',
  'categoryId',
  'name',
  'formalName',
  'shortDesc',
  'purpose',
  'website'
])
const categoryRequiredFieldCheck = checkRequiredFields([
  'name',
  'shortDesc',
  'desc'
])

const categoryRequiredPutFieldCheck = checkRequiredFields([
  '_id',
  '_rev',
  'type',
  'name',
  'shortDesc',
  'desc'
])

app.use(cors({ credentials: true }))
app.use(bodyParser.json())

app.get('/', (req, res, next) =>
  res.send({ name: pkg.description, version: pkg.version })
)

/// //////////////
///  Resources
/// /////////////

/**
 * @swagger
 * /resources:
 *   post:
 *     description: create new resource
 *     parameters:
 *     - in: "body"
 *       name: "body"
 *       description: "Resource Object"
 *       required: true
 *       schema:
 *         $ref: "#/definitions/Resource"
 *     responses:
 *       200:
 *        description: Success
 *        schema:
 *          type: object
 *          properties:
 *            ok:
 *              type: boolean
 *            id:
 *              type: string
 *            rev:
 *              type: string
 *       400:
 *         description: Missing body or required fields
 *         schema:
 *           type: object
 *           properties:
 *             ok:
 *               type: boolean
 *             message:
 *               type: string
 */
app.post('/resources', checkJwt, (req, res, next) => {
  if (isEmpty(prop('body', req))) {
    return next(
      new HTTPError(400, {
        ok: false,
        message:
          'Missing request body.  Content-Type header should be application/json.'
      })
    )
  }

  const body = compose(
    omit(['_id', '_rev']),
    merge(__, { type: 'resource' }),
    prop('body')
  )(req)

  const missingFields = postResourceRequiredFieldCheck(body)

  if (not(isEmpty(missingFields))) {
    return next(
      new HTTPError(400, {
        ok: false,
        message: `Missing required fields: ${join(' ', missingFields)}`
      })
    )
  }

  createResource(body)
    .then(result => res.status(201).send(result))
    .catch(err => next(new HTTPError(err.status, err.message)))
})

/**
 * @swagger
 * /resources/{id}:
 *   get:
 *     description: get resource by id
 *     parameters:
 *     - in: "path"
 *       name: "id"
 *       type: "string"
 *       required: true
 *     responses:
 *       200:
 *         description: Success
 *         schema:
 *           $ref: "#/definitions/Resource"
 *       500:
 *         description: Error
 */
app.get('/resources/:id', (req, res, next) => {
  getResource(path(['params', 'id'], req))
    .then(doc => res.status(200).send(doc))
    .catch(err => next(new HTTPError(err.status, err.message)))
})

/**
 * @swagger
 * /resources/{id}:
 *   put:
 *     description: update resource
 *     parameters:
 *     - in: "path"
 *       name: "id"
 *       type: "string"
 *       required: true
 *     - in: "body"
 *       name: "body"
 *       description: "Resource Object"
 *       required: true
 *       schema:
 *         $ref: "#/definitions/Resource"
 *     responses:
 *       200:
 *         description: Success
 *         schema:
 *           type: object
 *           properties:
 *             ok:
 *               type: boolean
 *             id:
 *               type: string
 *             rev:
 *               type: string
 *       400:
 *         description: Missing body or required fields
 *         schema:
 *           type: object
 *           properties:
 *             ok:
 *               type: boolean
 *             message:
 *               type: string
 */
app.put('/resources/:id', checkJwt, (req, res, next) => {
  if (isEmpty(prop('body'), req)) {
    return next(
      new HTTPError(
        400,
        'Missing request body. Content-Type header must be application/json'
      )
    )
  }

  const missingFields = putResourceRequiredFieldCheck(prop('body', req))
  if (not(isEmpty(missingFields))) {
    return next(
      new HTTPError(400, `Missing required fields: ${join(' ', missingFields)}`)
    )
  }

  updateResource(prop('body', req))
    .then(result => res.status(200).send(result))
    .catch(err => next(new HTTPError(err.status, err.message)))
})

/**
 * @swagger
 * /resources/{id}:
 *   delete:
 *     description: remove resource by id
 *     parameters:
 *     - in: "path"
 *       name: "id"
 *       type: "string"
 *       required: true
 *     responses:
 *       200:
 *        description: Success
 *        schema:
 *          type: object
 *          properties:
 *            ok:
 *              type: boolean
 */
app.delete('/resources/:id', checkJwt, (req, res, next) => {
  deleteResource(path(['params', 'id'], req))
    .then(result => res.status(200).send(result))
    .catch(err => next(new HTTPError(err.status, err.message)))
})

/**
 * @swagger
 * /resources:
 *   get:
 *     description: list resources
 *     parameters:
 *     - in: "query"
 *       name: "filter"
 *       type: "string"
 *       required: false
 *     responses:
 *       200:
 *        description: Success
 *        schema:
 *          type: array
 *          items:
 *            $ref: '#/definitions/Resource'
 */
app.get('/resources', (req, res, next) => {
  let searchStr = compose(split(':'), pathOr('', ['query', 'filter']))(req)
  const filter = pathOr(null, ['query', 'filter'])(req)
  var options = {}
  if (filter) {
    options = {
      include_docs: true,
      startkey: 'resource_' + last(searchStr),
      endkey: 'resource_' + last(searchStr) + '\ufff0'
    }
  } else {
    options = {
      include_docs: true,
      startkey: 'resource_',
      endkey: 'resource_\ufff0'
    }
  }
  listResource(options)
    .then(results => res.status(200).send(results))
    .catch(err => next(new HTTPError(err.status, err.message)))
})

/// //////////////////
/// //// categories
/// //////////////////

/**
 * @swagger
 * /categories:
 *   post:
 *     description:
 *       Adds a category to the collection of categories. When adding a category
 *       the `name`, `short desc`, and `desc` are required fields.
 *     parameters:
 *     - in: "body"
 *       name: "body"
 *       description: "Category Object"
 *       required: true
 *       schema:
 *         $ref: "#/definitions/Category"
 *     responses:
 *       200:
 *        description: Success
 *        schema:
 *          type: object
 *          properties:
 *            ok:
 *              type: boolean
 *            id:
 *              type: string
 *            rev:
 *              type: string
 *       400:
 *         description: Missing body or required fields
 *         schema:
 *           type: object
 *           properties:
 *             ok:
 *               type: boolean
 *             message:
 *               type: string
 */
app.post('/categories', checkJwt, (req, res, next) => {
  if (isEmpty(prop('body'), req)) {
    return next(
      new HTTPError(
        400,
        'Missing request body.  Content-Type header should be application/json.'
      )
    )
  }

  const body = compose(
    omit(['_id', '_rev']),
    merge(__, { type: 'category' }),
    prop('body')
  )(req)

  const missingFields = categoryRequiredFieldCheck(body)
  if (not(isEmpty(missingFields))) {
    return next(
      new HTTPError(400, `Missing required fields: ${join(' ', missingFields)}`)
    )
  }

  createCategory(body)
    .then(result => {
      console.log('in then: ', result)
      res.status(201).send(result)
    })
    .catch(err => next(new HTTPError(err.status, err.message)))
})

app.get('/categories/:id', (req, res, next) => {
  getCategory(req.params.id)
    .then(result => res.status(200).send(result))
    .catch(err => next(err => new HTTPError(err.status, err.message)))
})

app.put('/categories/:id', checkJwt, (req, res, next) => {
  if (isEmpty(prop('body'), req)) {
    return next(
      new HTTPError(
        400,
        'Missing request body.  Content-Type header should be application/json.'
      )
    )
  }
  const missingFields = categoryRequiredPutFieldCheck(prop('body', req))
  if (not(isEmpty(missingFields))) {
    return next(
      new HTTPError(401, `Missing required fields: ${join(' ', missingFields)}`)
    )
  }

  updateCategory(req.body)
    .then(result => res.status(200).send(result))
    .catch(err => next(err => new HTTPError(err.status, err.message)))
})

app.delete('/categories/:id', checkJwt, async (req, res, next) => {
  const resources = await checkCategoryId(req.params.id)
  if (resources === 0) {
    deleteCategory(path(['params', 'id'], req))
      .then(result => res.status(200).send(result))
      .catch(err => next(new HTTPError(err.status, err.message)))
  } else {
    res.send({
      ok: false,
      message: `You cannot delete this category because ${resources} resources are assigned to it.`
    })
  }
})

app.get('/categories', (req, res, next) => {
  getAllCategories({
    include_docs: true,
    inclusive_end: true,
    start_key: 'category_',
    end_key: 'category_\ufff0'
  })
    .then(docs => {
      res.status(200).send(docs)
    })
    .catch(err => next(new HTTPError(err.status, err.message)))
})

/// //////////////////
/// // Error Handler
/// //////////////////

app.use(function(err, req, res, next) {
  console.log(req.method, ' ', req.path, ' ', 'error ', err)
  res
    .status(err.status || 500)
    .send({ status: err.status, message: err.message })
})

if (!module.parent) {
  app.listen(port, () => console.log('Im up and ready to go on port ', port))
}

module.exports = app
