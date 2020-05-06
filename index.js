// code away!
const express = require('express')
const logger = require('./middleware/logger')
const server = express()
const postRouter = require('./posts/postRouter')
const userRouter = require('./users/userRouter')

server.use(express.json())


server.use(logger())

server.get('/', (req, res) => {
    res.json({message: "Why, hello there"})
})

server.use('/api/posts', postRouter)

server.use('/api/users', userRouter)

server.listen(5000, () => {
    console.log('\n **SERVER IS RUNNING** \n')
})