const express = require('express');
const knex = require('../db');
const io = require('socket.io')();

const router = express.Router();

router.get('/', (req, res) => {
  res.render('chats');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    console.log(`message: ${msg}`);
  });
});


io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});

module.exports = router;
