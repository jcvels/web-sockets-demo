const express = require('express');
const app = express();

var server = require('http').Server(app);
var io = require('socket.io')(server)

app.use(express.static('public'))

app.use('/', (req, res) => {
    res.status(200).send(`<code>--> Server time is ${ new Date().getTime() }.</code>`)
})

io.on('connection', (socket) => {
    console.log('--> new connection through sockets')
    socket.on('test-message', (data) => console.log(`--> new message from client ${socket.id} : ${data.text.toLowerCase().trim()}`) )
});

server.listen(3000, () => console.log('--> server listen to port #3000'))