const { assoc } = require('ramda')
const pkGenerator = require('./lib/build-pk')
const {
  get,
  create,
  update,
  deleteDoc,
  allDocs,
  findDocs
} = require('./lib/dal-helper')

const createResource = resource => {
  resource._id = pkGenerator('resource_', resource.formalName)
  return create(resource)
}
const getResource = id => get(id)
const updateResource = resource => update(resource)
const deleteResource = id => deleteDoc(id)
const listResource = options => allDocs(options)
const getCategory = id => get(id)
const getAllCategories = options => allDocs(options)
const createCategory = doc => {
  const id = pkGenerator('category_', doc.name)
  return create(assoc('_id', id, doc))
}
const updateCategory = doc => update(doc)
const deleteCategory = id => deleteDoc(id)

const dal = {
  createResource,
  getResource,
  updateResource,
  deleteResource,
  listResource,
  createCategory,
  getCategory,
  updateCategory,
  deleteCategory,
  getAllCategories
}
module.exports = dal
