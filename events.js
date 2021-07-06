const EventEmitter = require('events') //Class
const emitter = new EventEmitter() //Actual object


// Register a listener
emitter.on('messageLogged', (arg) => {//e, eventArg
    console.log('Listener called', arg)
})

emitter.on('logging', arg => {
    console.log(arg.data)
})

// Raise an event
emitter.emit('messageLogged', {id: 1, url: 'a real url'})

emitter.emit('logging', {data: "Yohoho"})