const { toLower, trim, replace, concat, compose } = require('ramda')
module.exports = (prefix, value) =>
  compose(concat(prefix), replace(/ /g, '-'), trim, toLower)(value)
