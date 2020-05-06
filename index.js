// code away!
const express = require('express')
const logger = require('./middleware/logger')
const server = express()

server.use(express.json())


server.use(logger())

server.get('/', (req, res) => {
    res.json({message: "Why, hello there"})
})

server.listen(5000, () => {
    console.log('\n **SERVER IS RUNNING** \n')
})