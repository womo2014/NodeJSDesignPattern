
class Logger {
    constructor(name) {
        // factory pattern
        // if (!new.target) {
        //     return new Logger(name)
        // }
        this.name = name
    }

    log(message) {
        console.log(`[${this.name}] ${message}`)
    }

    info(message) {
        this.log(`info: ${message}`)
    }

    verbose(message) {
        this.log(`verbose: ${message}`)
    }
}

module.exports = Logger
