var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
var fileName="index.html";
var encode = "utf8";
var fileStr = fs.readFileSync(fileName).toString(encode);
app.get('/', function(request, response) {
  response.send(fileStr);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
