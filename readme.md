# has-property

A [Node.js](https://nodejs.org/) module which tests whether an object possesses a property. It's like [`hasOwnProperty()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) but it checks the entire prototype chain.

## Installation

```bash
npm install has-property --save
```

## Usage

```javascript
const hasProperty = require('has-property')

class Obj {
  get clsProp () { return 'Hello world' }
}

const obj = new Obj()

obj.clsProp // 'Hello world'
obj.hasOwnProperty('clsProp') // false
hasProperty(obj, 'clsProp') // true

obj.ownProp = true
obj.hasOwnProperty('ownProp') // true
hasProperty(obj, 'ownProp') // true
```

## Related Projects

* [has-getter](https://github.com/lamansky/has-getter)
* [has-setter](https://github.com/lamansky/has-setter)
