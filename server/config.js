const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');

const app = express();
const cors = require('cors');
const routes = require('./routes.js');

// middleware
app.use(cors);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/../client/dist`));

// HTTP Requests go here

app.post('/Users', routes.addUserInfo);

// get password and email for now
app.get('/Login', routes.loginVerification);
// gets all user data from users table
app.get('/home', routes.homeCardInfo);

app.post('/Swap', routes.upDateUser);

app.post('/swap', upload);
// if route has no get, page falls back to html to rerender component

// method adds info to registered user database

app.get('/*', routes.refresh);

module.exports = app;
