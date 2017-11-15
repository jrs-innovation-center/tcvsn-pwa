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

const dal = {
  createResource,
  getResource,
  updateResource,
  deleteResource,
  listResource
}

module.exports = dal
