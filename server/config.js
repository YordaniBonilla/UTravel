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
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

app.post('/Users', routes.addUserInfo);
//app.get('/*', route.fallback); 

module.exports = app
