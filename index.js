import { WebSocketServer } from 'ws';
const wss = new WebSocketServer({ port: 3000 });

wss.on('connection', function connection(ws) {
  ws.on('message', function message(data) {
    console.log('received: %s', data);
    wss.clients.forEach(function each(client) {
        client.send(data);
     });

  });

});

// const express = require('express');
// const http = require('http');
// const path = require('path');

// const app = express();

// const port = process.env.PORT || 12345;

// app.use(express.static(__dirname + '/'));

// app.get('/*', (req, res) => res.sendFile(path.join(__dirname)));


// // import { WebSocketServer } from 'ws';




// app.listen(port, () => console.log(`App running on: http://localhost:${port}`));
// const server = http.createServer();


// const WebSocketServer = require('ws');


// const wss = new WebSocketServer('ws://localhost:3000');

// wss.on('connection', function connection(ws) {
//   ws.on('message', function message(data) {
//     console.log('received: %s', data);
//     wss.clients.forEach(function each(client) {
//         // client.send(data);
//      });

//   });
//   ws.on('error', function(e){
//     console.log("stream error "+e);
//   });
// });



// server.listen('3000', () => console.log(`App running on: http://localhost:3000`));
