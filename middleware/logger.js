//LOGGER middleware
const express = require('express')
server = express()

//request req.method, request url, and a timestamp
module.exports = () => 
    {return (req, res, next) => {
        const method = req.method
        const url = req.originalUrl
        const timeStamp = Date.now()

        console.log(`${method} ${url} ${timeStamp}`)

        next();
    }
}