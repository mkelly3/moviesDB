var mysql = require('mysql2');

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'movie_db'
  },
  console.log(`Connected to the movie_db database.`)
);
  
  
module.exports = db;