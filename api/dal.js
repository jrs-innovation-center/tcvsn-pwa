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

<<<<<<< HEAD
const getCategory = id => {
  console.log("getCategory", id);
  return get(id);
};
const getAllCategories = options => allDocs(options || { include_docs: true });
=======
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
>>>>>>> 5481539c91d182af899fb244c7edc99de531c7f1
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
