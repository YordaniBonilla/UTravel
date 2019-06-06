const express = require("express");
const bodyParser = require("body-parser");
const compression = require("compression");
const app = express();
const mysql = require('../database/mysql.js');
const routes = require('./routes.js');
const formidable = require('formidable');
const cors = require('cors');

const server = express();

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
}
//middleware
app.use(cors(corsOptions))
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true}));
app.use(express.static(__dirname + "/../client/dist"));

//HTTP Requests go here

app.post('/Users', routes.addUserInfo);

//get password and email for now
app.get('/Login', routes.loginVerification)
//gets all user data from users table
app.get('/home', routes.homeCardInfo)

app.post('/swap',upload)
//if route has no get, page falls back to html to rerender component
app.get('/*', routes.refresh)


module.exports = app
