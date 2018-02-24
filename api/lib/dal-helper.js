require('dotenv').config()
const PouchDB = require('pouchdb-core')
PouchDB.plugin(require('pouchdb-adapter-mysql'))
PouchDB.plugin(require('pouchdb-find'))
const HTTPError = require('node-http-error')

const db = new PouchDB('data', { adapter: 'mysql' })
const { pluck, map, prop } = require('ramda')

const get = id => db.get(id)
const create = doc => db.put(doc)
const update = doc => db.put(doc)
const deleteDoc = id =>
  db
    .get(id)
    .then(doc => db.remove(doc))
    .catch(err => console.log(err))

const allDocs = options => {
  return db.allDocs(options).then(docs => pluck('doc', docs.rows))
}

const findDocs = query => (query ? db.find(query).then(res => res.docs) : [])

const findCategoryId = categoryIdName =>
  db
    .find({ selector: { categoryId: categoryIdName } })
    .then(res => res.docs.length)

const dalHelper = {
  get,
  create,
  update,
  deleteDoc,
  allDocs,
  findDocs,
  findCategoryId
}

module.exports = dalHelper
