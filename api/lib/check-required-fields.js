const { difference, keys } = require('ramda')

module.exports = checkKeys => data => difference(checkKeys, keys(data))
