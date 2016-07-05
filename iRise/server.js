var exp = require('express');
var site = exp();
var server = require('http').createServer(site);
var io = require('socket.io')(server);
var fs = require('fs');
var port = process.env.port || 1337;

site.use("/", exp.static(__dirname + '/assets'));
server.listen(port);

site.get('/', function (req, res) {
  res.sendfile(__dirname + '/assets/index.html');
});