// module use our version of Require

console.log('in moduleB: start')
exports.loaded = false
console.log('in moduleB: loading moduleA')
const moduleA = require('./moduleA.js')
console.log('in moduleB: moduleA loaded')

exports.b = 2
exports.loaded = true
exports.aLoaded = moduleA.loaded
console.log('in moduleB: end')
