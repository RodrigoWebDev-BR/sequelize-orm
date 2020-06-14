const express = require('express')
const UsersControllers = require('../app/controllers/UsersControllers')
const routes = express.Router()

routes.get('/users', UsersControllers.index)

routes.post('/users', UsersControllers.store)

routes.put('/users/:id', UsersControllers.update)

routes.delete('/users/:id', UsersControllers.destroy)

module.exports = routes