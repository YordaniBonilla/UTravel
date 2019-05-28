// If using MySQL, install mysql2 package with npm install -S mysql2
//mysql2 npm package has support for Promises
const mysql = require('mysql2');

//change database credentials as needed
const config = {
  host: 'localhost',
  user: 'root',
  password: 'Holacode',
  database: 'Users',
};

const connection = mysql.createConnection(config);

//Example mysql query using Promises
var userInfo = function(cb) {
  con.query('SELECT * FROM Users', (err, results) => {
    if(err) {
      cb(err, null);
    } else {
      cb(null, results);
    }
  });
 };

 var insertOne = function(description, cb) {
  con.query('INSERT INTO Users () VALUES (?, ?)',
    [], (err, results) => {
      if(err) {
        cb(err, null);
      } else {
        console.log(results);
        cb(null, results);
      }
    });
 };
 
module.exports = {
  userInfo,
  insertOne
};
