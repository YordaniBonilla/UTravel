const express = require("express");
const bodyParser = require("body-parser");
const compression = require("compression");
const app = express();
const mysql = require('../database/mysql.js');
const routes = require('./routes.js');
//middleware
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));

//HTTP Requests go here

app.post('/Users', routes.addUserInfo);

//get password and email for now
app.get('/Login', routes.loginVerification)
//gets all user data from users table
app.get('/home', routes.homeCardInfo)
//if route has no get, page falls back to html to rerender component
app.get('/*', routes.refresh)


module.exports = app
