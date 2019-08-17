const path = require('path');
const database = require('../database/mysql.js');

// allows access to functions in mysql.js database
addUserInfo = (request, response) => {
  console.log(request.body.user);
  const { user } = request.body;
  database.postUserInfo(user.fname, user.email, user.userpassword, res => {
    response
      .status(200)
      .send(res)
      .end();
  });
};

upDateUser= (request, response) => {
  console.log(request.body);
  const { userlocation, about, userphone } = request.body;
  database.swapComponentInfo(userlocation, about, userphone, res => {
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
  });
};

loginVerification = (request, response) => {
  database.getLoginInfo(data => {
    response.status(200).send(data);
    console.log(data);
  });
};

homeCardInfo = (request, response) => {
  database.userCardInfo(rows => {
    response.status(200).send(rows);
    console.log(rows);
  });
};

module.exports = {
  addUserInfo,
  refresh,
  loginVerification,
  homeCardInfo,
  upDateUser
};
