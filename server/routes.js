const database = require('../database/mysql.js');
var path = require('path');
const IncomingForm = require('formidable').Incomingform
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
    console.log(data);
  });
};

homeCardInfo = (request, response) => {
  database.userCardInfo(rows => {
    response.status(200).send(rows);
    console.log(rows);
  })
}

upload = (request, response) => {
  var form = new IncomingForm()
  form.on('file', (field, file) => {
    //do somethign with the file
    //e.g. save it to the database
    // you can access it using file.path
    
  })

  form.on('end', () => {
    res.json()

  form.parse(req)  
  })

}

module.exports = {
  addUserInfo,
  refresh,
  loginVerification,
  homeCardInfo,
  upload
};

