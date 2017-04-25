const express = require('express');
const knex = require('../db');
const io = require('../lib/io.js');

const router = express.Router();

// app.get('/', (req, res, render) => {
//   res.render('')
// })

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


app.get('/users/:id/chat') {
  res.sendFile(__diname + '/')
}



module.exports = router;
