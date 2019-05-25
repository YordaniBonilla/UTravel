var fs = require('fs');

fs.readFile('./database/mysql.js','utf8',function (err, data) {
                    if (err) throw err;

    console.log(data);
});