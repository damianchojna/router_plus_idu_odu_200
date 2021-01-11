import LoggerOptionsInterface from "./LoggerOptionsInterface"

export default class Logger {
    constructor(protected options: LoggerOptionsInterface) {}

    debug(...rest) {
        if (this.options.debug) console.debug(...rest)
    }
}
