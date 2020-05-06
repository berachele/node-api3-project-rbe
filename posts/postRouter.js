const express = require('express');

const router = express.Router();

const Posts = require('./postDb')

//is there a way to bring in validatePost for the first get request??

router.get('/', (req, res) => {
  // do your magic!
});

router.get('/:id', validatePostId(), (req, res, next) => {
  // do your magic!
});

router.delete('/:id', validatePostId(), (req, res, next) => {
  // do your magic!
});

router.put('/:id', validatePostId(), (req, res, next) => {
  // do your magic!
});

// custom middleware

function validatePostId(req, res, next) {
  // do your magic!
  Posts.getById(req.params.id)
  .then(post => {
    if(post){
      req.post = post
      next()
    }else {
      res.status(400).json({
        message: "Invalid post ID"
      })
    }
  })
  .catch(next)
}

module.exports = router;