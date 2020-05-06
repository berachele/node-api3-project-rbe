const express = require('express');

const router = express.Router();

Users = require('./userDb')

router.post('/', validateUser(), (req, res, next) => {
  // do your magic!
});

router.post('/:id/posts', validateUser(), validateUserId(), validatePost(), (req, res, next) => {
  // do your magic!
});

router.get('/', validateUser(), (req, res, next) => {
  // do your magic!
});

router.get('/:id', validateUser(), validateUserId(), (req, res, next) => {
  // do your magic!
});

router.get('/:id/posts', validateUser(), validateUserId(), validatePost(), (req, res, next) => {
  // do your magic!
});

router.delete('/:id', validateUser(), validateUserId(), (req, res, next) => {
  // do your magic!
});

router.put('/:id', validateUser(), validateUserId(), (req, res, next) => {
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
  .catch(next)
}

function validateUser(req, res, next) {
  // do your magic!
  const user = req.body
  if(!user){
    res.status(400).json({
      message: "Missing user data"
    })
  }else if(!user.name){
    res.status(400).json({
      message: "Missing required name field"
    })
  }else {
    next()
  }
}

function validatePost(req, res, next) {
  // do your magic!
  const post = req.body
  if(!post){
    res.status(400).json({
      message: "Missing post data"
    })
  }else if(!post.text){
    res.status(400).json({
      message: "Missing required text field"
    })
  } else {
    next()
  }
}

module.exports = router;
