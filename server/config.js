const express = require("express");
const bodyParser = require("body-parser");
const compression = require("compression");

const app = express();

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


app.get('/', function(req,res) {
  res.end(JSON.stringify(req.query)
  //contains the URL query parameters (after the ? in the URL).
})

module.exports = app
