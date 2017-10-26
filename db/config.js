// Config connects us to the database

const options = {
  query:(e) =>{
  console.log(e.query);
}
}

const pgp = require('pg-promise')(options);

function setDatabase() {
  if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV){
    return pgp({
      database: 'ToDoData',
      port:5432,
      host: 'localhost',
    });
} else if (process.env.NODE_ENV === 'production') {
  return pgp(process.env.DATABASE_URL);
}
}

const db = setDatabase();

module.exports = db; // Here we are exporting the database to be used by other files
