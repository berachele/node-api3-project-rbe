const express = require('express');
const router = express.Router();
Users = require('./userDb')

//bringing in middlewares
const validatePost = require('../middleware/validatePost')
const validateUser = require('../middleware/validateUser')
const validateUserId = require('../middleware/validateUserId')

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


module.exports = router;
