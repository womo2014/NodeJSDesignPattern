// simple implementation of require function in Node.js

function loadModule(filename, module, Require) {
    const wrappedSrc = `(function(module, exports, require) {
        ${require('fs').readFileSync(filename, 'utf8')}
    })(module, module.exports, Require);`
    eval(wrappedSrc)
}

const Require = (moduleName) => {
    console.log(`Require invoked for module: ${moduleName}`)
    const id = Require.resolve(moduleName)
    if (Require.cache[id]) {
        console.log(`use cache: ${moduleName}`)
        return Require.cache[id].exports
    }

    const module = {
        exports: {},
        id: id,
    }
    Require.cache[id] = module
    loadModule(id, module, Require)

    return module.exports
}

Require.cache = {}
Require.resolve = (moduleName) => {
    // simple resolve, just see moduleName as file path
    return moduleName
}

module.exports = Require




