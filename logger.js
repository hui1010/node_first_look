const EventEmitter = require('events') //Class

var url = 'http://mylogger.io/log'

class Logger extends EventEmitter {
    log(message) {
    //send an HTTP request
    console.log(message)

    // Raise an event
    this.emit('messageLogged', {id: 1, url: 'a real url'})
}

}


// module.exports.log = log
// module.exports.endPoint = url

module.exports = Logger