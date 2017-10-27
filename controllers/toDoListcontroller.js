// The Controller holds the specific functions that will be sent out to their corresponding views

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

toDoListController.show = (req, res) => {
  ToDoList.findById(req.params.id)
    .then(data => {
      res.status(200).render('toDoOne.ejs',
      {data: data})
    }).catch((err) => {
      console.log(err);
      res.status(500).json({error: err});
    });
};

toDoListController.create = (req, res) => {
  ToDoList.create({
    chore: req.body.chore,
    description: req.body.description,
    status: req.body.status,
  }).then(data => {
    //console.log("hello");
    res.redirect(`/toDo`)
  }).catch((err) => {
      console.log(err);
      res.status(500).json({error: err});
    });
};

toDoListController.edit = (req, res) => {
  ToDoList.findById(req.params.id)
  .then(data => {
      res.status(200).render('toDoEdit.ejs',
      {data: data})
    }).catch((err) => {
      console.log(err);
      res.status(500).json({error: err});
    });
};

toDoListController.update = (req, res) => {
  ToDoList.update({
    chore: req.body.chore,
    description: req.body.description,
    status: req.body.status
  }, req.params.id)
  .then(data => {
    res.redirect(`/toDo/${data.id}`)
  }).catch((err) => {
      console.log(err);
      res.status(500).json({error: err});
    });
};

toDoListController.delete = (req, res) => {
  ToDoList.destroy(req.params.id)
  .then(() =>{
    res.redirect('/toDo');
   }).catch(err => {
      console.log(err);
      res.status(500).json({err,
      });
    });
};


module.exports = toDoListController;
