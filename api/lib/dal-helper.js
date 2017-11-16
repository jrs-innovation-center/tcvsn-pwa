require('dotenv').config()
const PouchDB = require('pouchdb')
PouchDB.plugin(require('pouchdb-find'))
const HTTPError = require('node-http-error')
const db = new PouchDB(process.env.COUCHDB_URL + process.env.COUCHDB_NAME)
const { pluck, map, prop } = require('ramda')

const get = id => db.get(id)
const create = doc => db.put(doc)
const update = doc => {
  return db.put(doc)
}
const deleteDoc = id => db.get(id).then(doc => db.remove(doc))

<<<<<<< HEAD
const allDocs = options =>
  db.allDocs(options).then(docs => pluck("doc", docs.rows));

=======
const allDocs = options => {
  console.log('options - alldocs', options)
  return db
    .allDocs(options || { include_docs: true })
    .then(docs => pluck('doc', docs.rows))
}
>>>>>>> 5481539c91d182af899fb244c7edc99de531c7f1
//   return options
//     ? db.allDocs(options).then(docs => pluck("doc", docs.rows))
//     : Promise.resolve([]);
// };

const findDocs = query => (query ? db.find(query).then(res => res.docs) : [])
//db.createIndex({index:{fields:[]}})

const dalHelper = {
  get,
  create,
  update,
  deleteDoc,
  allDocs,
  findDocs
}

module.exports = dalHelper
