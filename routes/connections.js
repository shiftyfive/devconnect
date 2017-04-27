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
router.get('/', authorize, (req, res, next) => {
  const { userId } = req.session
  const id = userId

  // knex('connections')
  //   .where('user_id1', id)
  //   .orWhere('user_id2', id)
  //   .andWhere('is_connected', true)
  //   .then(connections => {
  //     let ids = connections.filter(notMyId)
  //     promise.all(ids) // then get info

  .then(connections => {

    console.log(connections);
    res.send(connections)
  })
})

// // // Index all new connections the user could have
// // router.get('/find', (req, res, next) => {
//
// })
//
// // // Index all pending friend requests a user has
// // router.get()


module.exports = router;
