// Routes tells the server where to go next by determining the path to the view

const express = require('express')

const toDoRoutes = express.Router()
const toDoListController = require('../controllers/toDoListController.js')

toDoRoutes.get('/', toDoListController.index);


toDoRoutes.get('/add', (req, res) => {
  res.render('toDoNew.ejs');
})
toDoRoutes.post('/', toDoListController.create);


toDoRoutes.get('/:id', toDoListController.show);



// toDoRoutes.get('/:id/edit', toDoListController.edit);

// toDoRoutes.put('/:id', toDoListController.update);

// toDoRoutes.delete('/:id', toDoListController.delete);

module.exports = toDoRoutes;

