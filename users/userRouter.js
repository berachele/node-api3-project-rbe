const express = require('express');

const router = express.Router();

Users = require('./userDb')

router.post('/', (req, res) => {
  // do your magic!
});

router.post('/:id/posts', validateUserId(), (req, res) => {
  // do your magic!
});

router.get('/', (req, res) => {
  // do your magic!
});

router.get('/:id', validateUserId(), (req, res) => {
  // do your magic!
});

router.get('/:id/posts', validateUserId(), (req, res) => {
  // do your magic!
});

router.delete('/:id', validateUserId(), (req, res) => {
  // do your magic!
});

router.put('/:id', validateUserId(), (req, res) => {
  // do your magic!

});

//custom middleware

function validateUserId(req, res, next) {
  // do your magic!
  Users.getById(req.params.id)
  .then(user => {
    if(user){
      req.user = user
      next()
    } else {
      res.status(400).json({
        message: "Invalid user ID"
      })
    }
  })
  .catch(err => {
    console.log({err})
    res.status(500).json({
      error: "There was an error retrieving this user"
    })
  })
}

function validateUser(req, res, next) {
  // do your magic!
}

function validatePost(req, res, next) {
  // do your magic!
}

module.exports = router;
