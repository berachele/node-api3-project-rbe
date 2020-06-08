const express = require('express');
const router = express.Router();
const Posts = require('./postDb')
//bringing in middlewares
const validatePostId = require('../middleware/validatePostId')

//is there a way to bring in validatePost for the first get request??

router.get('/', (req, res, next) => {
  // do your magic!
  Posts.get()
  .then(post => {
    res.status(200).json(post)
  })
  .catch(next)
});

router.get('/:id', validatePostId(), (req, res, next) => {
  // do your magic!
  const id = req.params.id
  Posts.getById(id)
  .then(post => {
    res.status(200).json(post)
  })
  .catch(next)
});

router.delete('/:id', validatePostId(), (req, res, next) => {
  // do your magic!
  const id = req.params.id
  Posts.remove(id)
  .then(post => {
    if(post === 1){
      Posts.get()
      .then(success => {
        res.status(200).json(success)
      })
    }
  })
  .catch(next)
});

router.put('/:id', validatePostId(), (req, res, next) => {
  // do your magic!
  const id = req.params.id
  Posts.update(id, req.body)
  .then(post => {
    console.log({post})
    if(post === 1){
      Posts.get()
      .then(success => {
        res.status(200).json(success)
      })
    }
  })
  .catch(next)
});


module.exports = router;