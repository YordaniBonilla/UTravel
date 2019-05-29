// If using MySQL, install mysql2 package with npm install -S mysql2
//mysql2 npm package has support for Promises
const mysql = require('mysql2');

//require mysql2 tables 

//change database credentials as needed
const config = {
  host: 'localhost',
  user: 'root',
  password: 'Holacode',
  database: 'UsersInfo',
};

const connection = mysql.createConnection(config);

//Example mysql query using Promises


 postUserInfo = (fname, cb) => {
  connection.query(
    'INSERT INTO users (fname) VALUES (?);',
    [fname],
    (error, results) => {
      if (error) {
        throw error;
      } else {
        cb(results);
      }
    }
  );
};
 //making userInfo and insertone function available to other modules
module.exports = {
  postUserInfo
};
