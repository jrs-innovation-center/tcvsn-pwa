const { assoc } = require("ramda");
const pkGenerator = require("./lib/build-pk");
const {
  get,
  create,
  update,
  deleteDoc,
  allDocs,
  findDocs
} = require("./lib/dal-helper");

const getCategory = id => get(id);
const getAllCategories = options => allDocs(options);
const createCategory = doc => {
  const id = pkGenerator("category_", doc.name);
  return create(assoc("_id", id, doc));
};
const updateCategory = doc => update(doc);
const deleteCategory = id => deleteDoc(id);
const dal = {
  createCategory,
  getCategory,
  updateCategory,
  deleteCategory,
  getAllCategories
};
module.exports = dal;
