require('dotenv').config()
const PouchDB = require('pouchdb-core')
PouchDB.plugin(require('pouchdb-adapter-mysql'))
PouchDB.plugin(require('pouchdb-find'))

const db = new PouchDB('data', { adapter: 'mysql' })

// sort the docs by the type property
db
  .createIndex({ index: { fields: ['type'] } })
  .then(() => {
    console.log('Created an index on the type field.')
  })
  .catch(err => console.log(err))

// sort the docs by the name property
db
  .createIndex({ index: { fields: ['name'] } })
  .then(() => {
    console.log('Created an index on the name field.')
  })
  .catch(err => console.log(err))

// sort the resources by the rank property
db
  .createIndex({ index: { fields: ['rank'] } })
  .then(() => {
    console.log('Created an index on the rank.')
  })
  .catch(err => console.log(err))
