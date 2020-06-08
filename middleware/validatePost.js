const express = require('express')
server = express()

module.exports = () => {
    return(req, res, next) => {
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
}
