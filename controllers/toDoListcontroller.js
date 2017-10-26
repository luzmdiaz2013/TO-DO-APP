const ToDoList = require('../models/ToDoModel.js')

const toDoListController = {}

toDoListController.index = (req, res) => {
  // console.log('showing index')
  ToDoList.findAll().then((data) => {
    console.log(data)
    res.render('toDoIndex.ejs',
      {data})
  }).catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
};


module.exports = toDoListController;
