const express = require('express')
server = express()
const Posts = require('../posts/postDb')

module.exports = () => {
    return(req, res, next) => {
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
}
