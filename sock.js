
// const WebSocket = require('ws');
// const http = require('http');
//     let options = {
//       headers: {
//         "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3419.0 Safari/537.36"
//       }
//     };
    import { WebSocketServer } from 'ws';
// const server = http.createServer();
// const wss = new WebSocketServer('ws://localhost:3000');

    // wss.on('connection', function connection(ws) {
    //     console.log("wsss===open");
      
    //     });   
    

const connect = (endpoint) => {

  try {

    let options = {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3419.0 Safari/537.36"
      }
    };

    let client = new WebSocketServer(endpoint);
    client.binaryType = "arraybuffer";


    client.onopen = () => {
      console.log("websocket open");
        //   client.send("42" + JSON.stringify(["getRooms", false]));
        client.send(JSON.stringify({"requestType":1,"sessionKey":"","Data":{"Firm":"ALLOW","PrivateKey":"TT@90","ApiKey":"CRIC@20"}}));
    };

    client.onmessage = (event) => {
    //   console.log("websocket message:", event.data);
    // wss.send(event.data);
    //   getMessage(event.data);
    };

    client.onclose = (reason) => {
      console.log("websocket close:", reason.code);
    };

    client.onerror = (error) => {
      console.log("websocket error:", error.message);
    };
  } catch (error) {
    console.log("connect error:", error.message);
  }
};

connect("ws://148.251.21.118:5570");

// function getMessage(msg) {
//     // console.log("opeeeeee--msg",msg);

//     wss.addEventListener('open', function (event) {
//         console.log('connected');
//     });
//     // wss.on('connection', function connection(ws) {
        
//         // wss.clients.forEach(function each(client) {
//         //     client.send(msg);
//         //     });
      
      
//     //   });

//     //   wss.onmessage = (event) => {
//     //     console.log("wss message:", event.data);
//     //     // getMessage(event.data);
//     //   };
// }

// server.listen('3000', () => console.log(`App running on: http://localhost:3000`));

  