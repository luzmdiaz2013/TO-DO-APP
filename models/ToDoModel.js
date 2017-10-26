// The Model grabs the info from the database
// and uses the data collected in "db" from config

const db = require('../db/config.js')

const ToDoList = {}

ToDoList.findAll = () => {// Selecting everything from the table
 return db.query('SELECT * FROM todolist');
};

ToDoList.findById = id => { // Selecting one thing from the table by id

 return db.one(`SELECT * FROM todolist
                WHERE id = $1`, [id] );
};

ToDoList.create = toDoData => {
  return db.one(
    `INSERT INTO todolist
    (chore, description, status)
    VALUES ($1, $2, $3)
    RETURNING * `,  [toDoData.chore, toDoData.description, toDoData.status]);
};


ToDoList.update = (toDoData, id) => {

  return db.one(
    `UPDATE todolist SET
    chore = $1,
    description = $2,
    status = $3
    WHERE id = $4
    RETURNING * `,  [toDoData.chore, toDoData.description, toDoData.status, id]);
};

ToDoList.destroy = id => {
  return db.none(
    `DELETE FROM todolist
    WHERE is = $1`, [id]);
};


module.exports = ToDoList;


