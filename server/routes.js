const database = require('../database/mysql.js');
var path = require('path');

//allows access to functions in mysql.js database
exports.addUserInfo = (request, response) => {
  const { fname, lname, email, userpassword, userphone, age } = request.body;
  database.postUserInfo(fname, lname, email, userpassword, userphone, age,  res => {
    response
    .status(200)
    .send(res)
    .end();
  });
};

exports.refresh = (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/dist/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
}



