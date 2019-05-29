const express = require("express");
const bodyParser = require("body-parser");
const compression = require("compression");
const app = express();
const mysql = require('../database/mysql.js')
const routes = require('./routes.js')
//middleware
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));

//HTTP Requests go here
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

app.post('/Users', routes.addUserInfo);
//app.get('/*', route.fallback); 

module.exports = app
