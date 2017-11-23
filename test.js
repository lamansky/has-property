'use strict'

const assert = require('assert')
const hasProperty = require('.')

describe('hasProperty()', function () {
  it('should return true for a class property', function () {
    class Obj { get clsProp () { return 'Hello world' } }
    assert(hasProperty(new Obj(), 'clsProp'))
  })

  it('should return true for an Object prototype property', function () {
    assert(hasProperty({}, 'hasOwnProperty'))
  })

  it('should return true for an own property', function () {
    assert(hasProperty({ownProp: true}, 'ownProp'))
  })

  it('should return false for a non-existent property', function () {
    assert(!hasProperty({}, 'ownProp'))
  })
})
