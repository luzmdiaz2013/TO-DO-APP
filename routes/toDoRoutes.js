const express = require('express')

const toDoRoutes = express.Router()
const toDoListController = require('../controllers/toDoListController.js')

toDoRoutes.get('/',toDoListController.index)

module.exports = toDoRoutes;
