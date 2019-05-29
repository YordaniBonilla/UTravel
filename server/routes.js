const database = require('../database/mysql.js');
//allows access to functions in mysql.js database
exports.addUserInfo = (request, response) => {

  const { fname } = request.body;
  database.postUserInfo(fname, res => {
    response
      .status(200)
      .send(res)
      .end();
  });
};