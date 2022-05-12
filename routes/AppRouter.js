const Router = require('express').Router()
const AuthRouter = require('./AuthRouter')
const CommentRouter = require('./CommentRouter')
const BookRouter = require('./BookRouter')
const UserRouter = require('./UserRouter')

Router.use('/auth', AuthRouter)
Router.use('/comment', CommentRouter)
Router.use('/book', BookRouter)
Router.use('/user', UserRouter)


module.exports = Router