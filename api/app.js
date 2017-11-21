require('dotenv').config()

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
  findCategory
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

app.get('/', (req, res, next) => res.send('Welcom to the api.'))

/// //////////////
///  Resources
/// /////////////

app.post('/resources', (req, res, next) => {
  if (isEmpty(prop('body', req))) {
    return next(
      new HTTPError(
        400,
        'Missing request body.  Content-Type header should be application/json.'
      )
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
      new HTTPError(400, `Missing required fields: ${join(' ', missingFields)}`)
    )
  }

  createResource(body)
    .then(result => res.status(201).send(result))
    .catch(err => next(new HTTPError(err.status, err.message)))
})

app.get('/resources/:id', (req, res, next) => {
  getResource(path(['params', 'id'], req))
    .then(doc => res.status(200).send(doc))
    .catch(err => next(new HTTPError(err.status, err.message)))
})

app.put('/resources/:id', (req, res, next) => {
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

app.delete('/resources/:id', (req, res, next) => {
  deleteResource(path(['params', 'id'], req))
    .then(result => res.status(200).send(result))
    .catch(err => next(new HTTPError(err.status, err.message)))
})

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

app.post('/categories', (req, res, next) => {
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

app.put('/categories/:id', (req, res, next) => {
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

app.delete('/categories/:id', (req, res, next) => {
  deleteResource(path(['params', 'id'], req))
    .then(result => res.status(200).send(result))
    .catch(err => next(new HTTPError(err.status, err.message)))
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

app.use(function (err, req, res, next) {
  console.log(req.method, ' ', req.path, ' ', 'error ', err)
  res.status(err.status || 500).send(err)
})

app.listen(port, () => console.log('Im up and ready to go on port ', port))
