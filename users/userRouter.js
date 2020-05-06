const express = require('express');
const router = express.Router();
Users = require('./userDb')
//bringing in middlewares
const validatePost = require('../middleware/validatePost')
const validateUser = require('../middleware/validateUser')
const validateUserId = require('../middleware/validateUserId')

router.post('/', validateUser(), (req, res, next) => {
  // do your magic!
  const newUser = req.body
  Users.insert(newUser)
  .then(user => {
    if(user){
      Users.get()
      .then(success => {
        res.status(201).json(success)
      })
    }
  })
  .catch(next)
}); 
//🥳🥳

router.post('/:id/posts', validateUser(), validateUserId(), validatePost(), (req, res, next) => {
  // do your magic!
});

router.get('/', (req, res, next) => {
  // do your magic!
  Users.get()
  .then(user => {
    res.status(200).json(user)
  })
  .catch(next)
}); 
//🥳

router.get('/:id', validateUserId(), (req, res, next) => {
  // do your magic!
  const id = req.params.id
  Users.getById(id)
  .then(user => {
    res.status(200).json(user)
  })
  .catch(next)
}); 
//🥳

router.get('/:id/posts', validateUserId(), (req, res, next) => {
  // do your magic!
  const id = req.params.id
  Users.getById(id)
  .then(user => {
    res.status(200).json(user)
  })
  .catch(next)
});
//Not fully functioning, only returning the actual user--wonder if I need to do a filter function to show only the posts from that user_id

router.delete('/:id', validateUser(), validateUserId(), (req, res, next) => {
  // do your magic!
  id = req.params.id
  Users.remove(id)
  .then(user => {
    if(user === 1){
      Users.get()
      .then(success => {
        res.status(200).json(success)
      })
    }
  })
  .catch(next)
});
//🥳

router.put('/:id', validateUser(), validateUserId(), (req, res, next) => {
  // do your magic!

});


module.exports = router;
