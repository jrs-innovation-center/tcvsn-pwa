const { toLower, trim, replace, concat, compose } = require("ramda");
module.exports = (prefix, value) => {
  return compose(concat(prefix), replace(" ", "-"), trim, toLower)(value);
};
