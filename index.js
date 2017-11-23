'use strict'

module.exports = function hasProperty (obj, propName) {
  while (obj) {
    if (Object.prototype.hasOwnProperty.call(obj, propName)) return true
    obj = Object.getPrototypeOf(obj)
  }
  return false
}
