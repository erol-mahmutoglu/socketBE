const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');

const app = express();
const httpServer = createServer(app);
const port = 4000;
const io = new Server(httpServer);

io.on('connection', (socket) => {
  console.log('a user connected', socket.id, socket.handshake.query.idToken);

  const data = { message: 'Hello, client!', timestamp: Date.now() };
  socket.emit('feed', data);

  socket.on('disconnect', () => {
    console.log('a user disconnected');
  });
});

httpServer.listen(port, () => {
  console.log(`Socket is listening on port ${port}`);
});
