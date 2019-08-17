//If using MySQL, install mysql2 package with npm install -S mysql2
//mysql2 npm package has support for Promises
const mysql = require('mysql2');

//require mysql2 tables 

//change database credentials as needed
const config = {
  host: 'localhost',
  user: 'root',
  password: 'Jadeninja93',
  database: 'UsersInfo',
};

const connection = mysql.createConnection(config);

//Example mysql query using Promises


 postUserInfo = (fname,email, userpassword, cb) => {
  var queryString = 'INSERT INTO users (fname, email, userpassword) VALUES (?, ?, ?);'
  connection.query(
    queryString,
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

swapComponentInfo = (count_id, about, userphone, cb) => {


  var queryString = 'INSERT INTO users (count_id, about, userphone) VALUES (  SELECT count_id FROM countries WHERE countries.country = ? ), ?, ?);'
 
  connection.query(queryString,
    [count_id, about, userphone], 
    (err, results, fields) => {
    if (err) {
      throw err;
    } else {
      cb(results)
    }
}

    )
}


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



//making userInfo and insertone function available to other modules
module.exports = {
  postUserInfo,
  getLoginInfo,
  userCardInfo,
  swapComponentInfo
};
