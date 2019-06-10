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


 postUserInfo = (fname,email, userpassword, cb) => {
  connection.query(
    'INSERT INTO users (fname, email, userpassword) VALUES (?, ?, ?);',
    [fname, email, userpassword],
    (error, results, fields) => {
      if (error) {
        throw error;
      } else {
        cb(results);
      }
    }
  );
};
addImage = (file, cb) => {
  var queryString = 'INSERT INTO users (file) VALUES (?);'
  
  connection.query(
  queryString,
  [file],
  (error,results, fields) => {
    if (error) {
      throw error;
    } else {
      cb(results);
    }
  }
    );
  };
  


getLoginInfo = cb => {
var queryString = 'SELECT email, userpassword from users'   
connection.query(
  queryString, 
  (error, results, fields) => {
    if (error) {
      throw error;
    } else {
      cb(results);
    }
  });
}; 


userCardInfo =  cb => {
  var queryString = 'SELECT * from users'
  connection.query(queryString, 
    (error, rows, fields) => {
    if(error) {
      throw error;
    } else {
      cb(rows);
    }
  });
};

swapComponentInfo = (userlocation, email, about, userphone ) => {


  var queryString = 'INSERT INTO users (userlocation, email, about, userphone) VALUES (?, ?, ?, ?);';
 
  connection.query(queryString,
    [userlocation, email, about, number], 
    (err, rows, fields) => {
    if (err) throw err;
 
    for (var i in rows) {
        console.log(rows[i]);
    }
}

    )
}

//making userInfo and insertone function available to other modules
module.exports = {
  postUserInfo,
  getLoginInfo,
  userCardInfo,
  swapComponentInfo
};
