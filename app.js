var express = require('express');
var app = express();
var moment = require("moment");
app.get('/', function (req, res) {
  var result = {
    ip: req.connection.remoteAddress,
    language: req.headers["accept-language"],
    useragent: req.headers['user-agent']
  }
  res.send(JSON.stringify(result));
});


app.listen(process.env.PORT || 3543, function () {
});
