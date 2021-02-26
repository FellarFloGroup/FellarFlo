// Dependencies
var express = require('express');
var http = require('http');
var path = require('path');
var socketIO = require('socket.io');

var app = express();
var server = http.Server(app);
var io = socketIO(server);

app.set('port', 5000);
app.use('/static', express.static(__dirname + '/static'));

// Routing
app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, 'index.html'));
});

// Starts the server.
server.listen(5000, function() {
  console.log('Starting server on port 5000');
});

// Add the WebSocket handlers
io.on('connection', function(socket) {

});

setInterval(function() {
  io.sockets.emit('message', 'Baa');
}, 1000);


// const app = http.createServer((request, response) => {
// 	response.writeHead(200, {'Content-Type': 'text/html'});
// 	response.write(`<h1>IT WORKEDDDDDD</h1>`);
// 	setTimeout(() => {
// 		response.write('<br>hi<br>hello');
// 		response.end();
// 	}, 3000);
// }).listen(3000);