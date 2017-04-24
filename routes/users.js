'use strict';

const express = require('express')
const knex = require('../db')
const bcrypt = require('bcrypt-as-promised')

// eslint-disable-next-line new-cap
const router = express.Router()

router.post('/users', (req, res, next) => {
  bcrypt.hash(req.body.password, 12)
    .then((hashed_password) => {
      return knex('users').insert({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        hashed_password: hashed_password
      }, '*');
    })
    .then((users) => {
      const user = users[0]

      delete user.hashed_password

      res.send(user)
    })
})

module.exports = router;
