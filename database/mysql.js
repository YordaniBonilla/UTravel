//If using MySQL, install mysql2 package with npm install -S mysql2
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


 postUserInfo = (fname, lname, email, userpassword, cb) => {
  connection.query(
    'INSERT INTO users (fname, lname, email, userpassword) VALUES (?, ?, ?, ?);',
    [fname, lname, email, userpassword],
    (error, results) => {
      if (error) {
        throw error;
      } else {
        cb(results);
      }
    }
  );
};
addImage = (file, cb) => {
  connection.query(
  'INSERT INTO users (file) VALUES (?);',
  [file],
  (error,results) => {
    if (error) {
      throw error;
    } else {
      cb(results);
    }
  }
    );
  };
  


getLoginInfo = cb => {
connection.query('SELECT email, userpassword from users' , (error, results) => {
    if (error) {
      throw error;
    } else {
      cb(results);
    }
  });
}; 


userCardInfo =  cb => {
  connection.query('SELECT * from users', (error, rows) => {
    if(error) {
      throw error;
    } else {
      cb(rows);
    }
  });
};
//making userInfo and insertone function available to other modules
module.exports = {
  postUserInfo,
  getLoginInfo,
  userCardInfo
};
