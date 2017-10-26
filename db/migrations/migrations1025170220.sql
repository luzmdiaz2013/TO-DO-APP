\c ToDoData
DROP TABLE IF EXISTS toDoList;
CREATE TABLE IF NOT EXISTS toDoList(
  id SERIAL PRIMARY KEY,
  chore VARCHAR,
  description VARCHAR,
  status VARCHAR
);

