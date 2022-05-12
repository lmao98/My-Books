const Router = require('express').Router()
const controller = require("../controllers/CommentController")

Router.get('/', controller.GetComments)
Router.get('/:book_id', controller.GetBookComments)
Router.post('/:book_id/:user_id', controller.AddComment)

module.exports = Router