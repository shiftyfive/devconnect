const express = require('express');
const knex = require('../db');
const io = require('../socketApi')

const router = express.Router();

router.get('/', (req, res) => {
  res.render('chats');
  sendNotification();
});



module.exports = router;
