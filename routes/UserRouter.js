const Router = require('express').Router()
const controller = require('../controllers/UserController')


Router.get('/', controller.GetUsers)
Router.get('/profile/:user_id', controller.GetProfile)

module.exports = Router