const database = require('../database/mysql.js');
var path = require('path');

//allows access to functions in mysql.js database
addUserInfo = (request, response) => {
  console.log(request.body.user)
  const { user } = request.body;
  database.postUserInfo(user.fname, user.lname, user.email, user.userpassword, user.userphone, res => {
    response
    .status(200)
    .send(res)
    .end();
  });
};

refresh = (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/dist/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
}

loginVerification = (request, response) => {
  database.getLoginInfo(data => {
    response.status(200).send(data);
    console.log(data)
  });
};

module.exports = {
  addUserInfo,
  refresh,
  loginVerification
};

