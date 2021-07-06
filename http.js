
const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.write('Hello Huiyi')
        res.end()
    }

    if(req.url === '/api/courses') {
        res.write(JSON.stringify([1, 2, 3]))
        res.end()
    }
}) // The server got created is an event emitter

//Don't really do this in real world, pass in a callback function to createServer() instead
// server.on('connection', () => {
//     console.log('New connection...')
// })

server.listen(3000)

console.log('Listening on port 3000...')
