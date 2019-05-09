// server.js
const express = require('express');
const SocketServer = require('ws').Server;
const WebSocket = require('ws');

// Set the port to 3001
const PORT = 3001;

// uuid random.
const uuidv4 = require('uuid/v4');

// Create a new express server
const server = express()
  // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () =>
    console.log(`Listening on ${PORT}`)
  );

// Create the WebSockets server
const wss = new SocketServer({ server });

// Broadcast to all.
wss.broadcast = function broadcast(data) {
  wss.clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  });
};

// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.
wss.on('connection', ws => {
  console.log('Client connected');

  let clientsCount = {
    counter: wss.clients.size,
    type: 'counter',
    id: uuidv4()
  };

  wss.broadcast(JSON.stringify(clientsCount));

  ws.on('message', function incoming(message) {
    // .parse JSON file.
    const recievedMsg = JSON.parse(message);

    if (recievedMsg.type === 'postNotification') {
      // Console log user's previous name and recent name.
      console.log(
        `User "${recievedMsg.prevUserName}" has changed their name to "${
          recievedMsg.currentUser.name
        }"`
      );
    } else if (recievedMsg.type === 'postMessage') {
      // Console log username and message content.
      console.log(`User ${recievedMsg.username} said ${recievedMsg.content}`);
    }

    wss.broadcast(message);
  });

  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => {
    let clientsCount = {
      counter: wss.clients.size,
      type: 'counter',
      id: uuidv4()
    };

    wss.broadcast(JSON.stringify(clientsCount));

    console.log('Client disconnected')
  });
});
