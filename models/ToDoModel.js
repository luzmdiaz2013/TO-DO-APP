// The Model grabs the info from the database
// and uses the data collected in "db" from config

const db = require('../db/config.js')

const ToDoList = {}

ToDoList.findAll = () => // Selecting everything from the table
  db.query('SELECT * FROM todolist');



module.exports = ToDoList;


