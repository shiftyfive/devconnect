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

// Index all connections the user has
// router.get()
//
//

// // Index all new connections the user could have
// router.get()
//
// // Index all pending friend requests a user has
// router.get()


module.exports = router;
