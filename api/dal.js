const { assoc } = require('ramda')
const pkGenerator = require('./lib/build-pk')
const {
  get,
  create,
  update,
  deleteDoc,
  allDocs,
  findDocs,
  findCategoryId
} = require('./lib/dal-helper')

const getAllCategories = options => allDocs(options || { include_docs: true })

const createResource = resource => {
  resource._id = pkGenerator('resource_', resource.name)
  return create(resource)
}
const getResource = id => get(id)
const updateResource = resource => update(resource)
const deleteResource = id => deleteDoc(id)
const listResource = options => allDocs(options)

const getCategory = id => get(id)
const createCategory = doc => {
  const id = pkGenerator('category_', doc.name)
  return create(assoc('_id', id, doc))
}
const updateCategory = doc => update(doc)
const deleteCategory = id => deleteDoc(id)

const checkCategoryId = id => findCategoryId(id)

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
  getAllCategories,
  checkCategoryId
}
module.exports = dal
