const express = require('express')
server = express()

module.exports = () => {
    return(req, res, next) => {
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
}