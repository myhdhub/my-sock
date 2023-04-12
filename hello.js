var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// Used for serving the HTML page (if used)
// app.get('/', function(req, res){
//   res.sendFile(__dirname + '/index.html');
// });

//Listen for new connections
io.on('connection', function(socket){
  console.log('a user connected');
});

// io.on('connection', function(socket){
//     socket.on('chat message', function(msg){
//       console.log('message: ' + msg);
//     });
//   });

http.listen(3000, function(){
  console.log('listening on *:3000');
});