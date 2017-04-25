'use strict';

const express = require('express')
const knex = require('../db')
const bcrypt = require('bcrypt-as-promised')
const router = express.Router()

router.get('/login', (req, res, next) => {
  res.render('signin')
})

router.get('/', (req, res, next) => {
  res.render('index', { title: 'Dev Connect' });
});

module.exports = router;
