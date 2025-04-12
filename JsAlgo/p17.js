const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', socket => {
  socket.on('message', msg => {
    console.log('Received:', msg);
    socket.send('Echo: ' + msg);
  });
});
