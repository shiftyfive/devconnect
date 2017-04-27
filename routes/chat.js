const express = require('express');
const knex = require('../db');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('chats');
});

// io.on('connection', (socket) => {
//   console.log('a user connected');
//   socket.on('disconnect', () => {
//     console.log('user disconnected');
//   });
// });
//
// io.on('connection', (socket) => {
//   socket.on('chat message', (msg) => {
//     console.log(`message: ${msg}`);
//   });
// });

module.exports = router;
