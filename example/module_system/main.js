// entry file
const Require = require('./require')

console.log('in main: loading moduleA')
const moduleA = Require('./moduleA.js')
console.log('in main: moduleA loaded')

console.log('in main: loading moduleB')
const moduleB = Require('./moduleB.js')
console.log('in main: moduleB loaded')

