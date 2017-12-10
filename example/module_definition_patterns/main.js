
// named export
console.log('------------------')
console.log('named export')
const loggerNamedExport = require('./loggerNamedExport')
loggerNamedExport.info('this is an infomation')
loggerNamedExport.verbose('this is a verbose')

// export a function
console.log('------------------')
console.log('export a function')
const loggerExportFunction = require('./loggerExportFunction')
loggerExportFunction('this is an infomation')
loggerExportFunction.verbose('this is a verbose')

// export a constructor(class)
console.log('------------------')
console.log('export a constructor')
const loggerExportConstructor = require('./loggerExportConstructor')
const dbLogger = new loggerExportConstructor('DB')
dbLogger.info('this is an infomation')

// extend 
class LoggerWithDebug extends loggerExportConstructor {
    debug(message) {
        this.log(`debug: ${message}`)
    }
}
const dbLoggerWithDebug = new LoggerWithDebug('DB')
dbLoggerWithDebug.debug('this is an infomation')

// export an instance
console.log('------------------')
console.log('export a instance')
const loggerExportInstance = require('./loggerExportInstance')
console.log(`count is: ${loggerExportInstance.count}`)
loggerExportInstance.log(`this is an infomation`)
console.log(`count is: ${loggerExportInstance.count}`)
const anotherRequiredInstance = require('./loggerExportInstance')
anotherRequiredInstance.log('this is an infomation from another required instance')
console.log(`count is: ${loggerExportInstance.count}`)
const customLogger = new loggerExportInstance.Logger('DB')
customLogger.log('this is an infomation by custom logger')


// monkey patching
console.log('------------------')
console.log('monkey patching')
const logger = require('./loggerNamedExport')
console.log(`logger.customLog is ${typeof logger.customLog}`)
require('./patcher')
console.log('after require a patcher')
console.log(`logger.customLog is ${typeof logger.customLog}`)
logger.customLog()