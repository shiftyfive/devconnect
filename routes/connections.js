'use strict'

const express = require('express')
const knex = require('../db')
const bcrypt = require('bcrypt-as-promised')
const router = express.Router()

// Middleware that kicks user to root if there's no session
const authorize = (req, res, next) => {
  if (!req.session.userId) {
    res.redirect('/')
  }

  next()
}

// Index all other users so user csn begin filtering
router.get('/', authorize, (req, res, next) => {
  const { userId } = req.session
  const id = userId

  knex('users')
  .select('*').whereNot('id', id)
  .then(users => {

  res.render('connections/index', { users })
  })
})

router.get('/:id', (req, res, next) => {
  let id = req.params.id

  knex('users').select('*').where({ id }).first()
  .then(user => {

    console.log(user);
    res.render('connections/show', user)
  })
})


module.exports = router;
