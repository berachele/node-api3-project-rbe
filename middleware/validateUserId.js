const express = require('express');
const server = express();
Users = require('./userDb')

module.exports = () => {
    return(req, res, next) => {
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
}