const EventEmitter = require('events') //Class

const Logger = require('./logger')
const logger = new Logger()

// function sayHello(name) {
//     console.log('Hello ' + name)
// }

// Register a listener
logger.on('messageLogged', (arg) => {//e, eventArg
    console.log('Listener called', arg)
})

// // sayHello('Huiyi')
// // console.log(window) // Don't have the window object anymore

// // console.log(module)

// console.log(logger) //{ log: [Function: log], endPoint: 'http://mylogger.io/log' }
// console.log(logger.log('Hohoho'))

logger.log('gogogo')