// code away!
const express = require('express')
const logger = require('./middleware/logger')
const server = express()
const postRouter = require('./posts/postRouter')
const userRouter = require('./users/userRouter')
const port = process.env.PORT || 5000 // || if the process.env.PORT is undefined, use 5000

server.use(express.json())

//logger middleware
server.use(logger())

//testing
server.get('/', (req, res) => {
    res.json({message: "Why, hello there"})
})

//bringing in url to connect to routes
server.use('/api/users', userRouter)
server.use('/api/posts', postRouter)

//error middleware
server.use((err, req, res, next) => {
    console.log({err})
    res.status(500).json({
        error: "There was an error retrieving this data"
    })
})

server.listen(port, () => {
    console.log(`\n **SERVER IS RUNNING on localhost:${port}** \n`)
})