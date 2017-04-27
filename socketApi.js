const socket_io = require('socket.io');

var io = socket_io();
var socketApi = {};

socketApi.io = io;

io.on('connection', (socket) => {
    console.log('A user connected');
});

socketApi.sendNotification = () => {
    io.sockets.emit('hello', {msg: 'Hello World!'});
}

module.exports = socketApi;
