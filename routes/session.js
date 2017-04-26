'use strict';

const express = require('express');
const knex = require('../db')
const bcrypt = require('bcrypt-as-promised')
const router = express.Router();

// ?????
router.get('/', (req, res, next) => {
  if (req.session.userId) {
    res.status(200).json(true)
  } else {
    res.status(200).json(false)
  }
})

// Login and create session
router.post('/new', (req, res, next) => {
  const { user_name, password } = req.body;

  let user;

  knex('users')
    .where('user_name', user_name)
    .first()
    .then((row) => {
      if (!row) {
        throw {
          status: 400,
          message: 'Bad username or password'
        };
      }

      user = row;

      return bcrypt.compare(password, user.hashed_password);
    })
    .then(() => {
      delete user.hashed_password;

      req.session.userId = user.id

      res.redirect('/users');
    })
    .catch(bcrypt.MISMATCH_ERROR, () => {
    throw {
      status: 400,
      message: 'Bad email or password'
    };
    })
    .catch((err) => {
      next(err);
    });
})

// Logout and delete session
router.delete('/', (req, res, next) => {
 req.session = null
 res.redirect('/')
})

module.exports = router;
