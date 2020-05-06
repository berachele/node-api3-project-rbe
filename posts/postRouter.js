const express = require('express');
const router = express.Router();

const validatePost = require('../middleware/validatePost')
const validatePostId = require('../middleware/validatePostId')

//is there a way to bring in validatePost for the first get request??

router.get('/', validatePost(), (req, res) => {
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


module.exports = router;