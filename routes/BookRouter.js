const Router = require('express').Router()
const controller = require('../controllers/BookController')

Router.get('/', controller.GetBooks)
Router.get('/:user_id', controller.GetUserBooks)
Router.post('/:user_id', controller.CreateBook)
Router.put('/:book_id', controller.UpdateBook)
Router.delete('/:book_id', controller.DeleteBook)
Router.delete('/:book_id/:user_id', controller.DeleteBookByUserId)

module.exports = Router