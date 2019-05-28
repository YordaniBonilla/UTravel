const express = require("express");
const bodyParser = require("body-parser");
const compression = require("compression");
const app = express();
const mysql = require('../database/mysql.js')
//middleware
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));

//HTTP Requests go here

app.post('/register', function(req, res) {
  let userFirstName = req.body.fname;
  let userLastName = req.body.lname;
  let userEmail = req.body.email;
  let userAboutMe = req.body.aboutme;
  let userPassword = req.body.password;
  let userNumber = req.body.number;
  let userAge = req.body.age;
  let userCountry = req.body.country;

  connection.query("INSERT INTO `Users` (fname,lname,email,aboutme,password,number,age,country) VALUES ()" )
});

app.get('/user', function(req, res){
  mysql.userInfo((err, results) => {
     if(err) {
       console.log('No data recieved from database');
       res.sendStatus(500);
     } else {
       res.status(200).json(results);
     }
   })
})

app.post('/forum', function(req, res){

  let description = req.body.description;
  let description2 = req.body.description2;
 
  if(!description) {
    res.sendStatus(400);
  } else {
    database.insertOne(description,description2,(err, results) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.status(200).json(results);
      }
    });
  }
 });
//app.get('/*', route.fallback); 

module.exports = app
