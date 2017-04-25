'use strict';

const express = require('express')
const knex = require('../db')
const bcrypt = require('bcrypt-as-promised')
const router = express.Router()

router.get('/:id', (req, res, next) => {
  let id = req.params.id
  knex('users').select('*').where({ id }).then(user => {
    console.log(user);
    res.render('friends/profile', { user })
  })
})

router.post('/', (req, res, next) => {
  if (req.body.password !== req.body.confirm) {
    res.send('Password fields are not matching!')
  }

  bcrypt.hash(req.body.password, 12)
    .then((hashed_password) => {
      return knex('users').insert({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        user_name: req.body.user_name,
        email: req.body.email,
        hashed_password: hashed_password
      }, '*');
    })
    .then((users) => {
      const user = users[0]

      delete user.hashed_password
      console.log(user);
      res.send(user)
    })
})

module.exports = router;
