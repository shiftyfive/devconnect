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

// Pull up edit form for user profile
router.get('/edit', authorize, (req, res, next) => {
  const { userId } = req.session
  const id = userId

  knex('users').select('*').where({ id }).first()
  .then(user => {
    res.render('users/edit', { user })
  })
})

// Show your personal profile
router.get('/', authorize, (req, res, next) => {
  const { userId } = req.session
  const id = userId

  knex('users').select('*').where({ id }).then(user => {

    res.render('users/profile', { user })
  })
})

// Update user profile after you submit edits
router.put('/', (req, res, next) => {
  const { userId } = req.session
  const id = userId

  let user = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    user_name: req.body.user_name,
    email: req.body.email,
    img_url: req.body.img_url,
    bio: req.body.bio,
    skills: req.body.skills,
  }
  knex('users').update(user, '*').where({ id }).then(user => {
    res.redirect('/users')
  })
})

// Create user account
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
      req.session.userId = user.id

      res.redirect(`/users`)
    })
})

module.exports = router;
// Contact GitHub API Training Shop Blog About
