// module use our version of Require

console.log('in moduleA: start')
exports.loaded = false
console.log('in moduleA: loading moduleB')
const moduleB = require('./moduleB.js')
console.log('in moduleA: moduleB loaded')
exports.a = 1
exports.loaded = true
exports.bLoaded = moduleB.loaded
console.log('in moduleA: end')
