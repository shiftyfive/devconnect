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

// Show one other user
router.get('/:id', authorize, (req, res, next) => {
  const id = req.params.id

  knex('users')
  .select('*').where({ id })
  .then(users => {
    console.log(users);

    res.render('connections/show', { users })
  })
})

// Index all other users so user can begin filtering
router.get('/', authorize, (req, res, next) => {
  const { userId } = req.session
  const id = userId

  knex('users')
  .select('*').whereNot('id', id)
  .then(users => {

  res.render('connections/index', { users })
  })
})

module.exports = router;
