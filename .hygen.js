var map = require('lodash/fp/map'),
  split = require('lodash/fp/split'),
  join = require('lodash/fp/join'),
  concat = require('lodash/fp/concat')
curry = require('lodash/fp/curry')

module.exports = {
  helpers: {
    U: s => s.toUpperCase(),
    L: s => s.toLowerCase(),
    S: (fieldNames, fieldTypes) => {
      return map(function(k) {
        return fieldTypes[k + '.type']
      }, split(',', fieldNames))
    }
  }
}
