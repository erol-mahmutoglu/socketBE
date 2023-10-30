const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');

const mysql = require('mysql');
const { FEED } = require('./feed');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'ilgilen',
});

connection.connect();

const app = express();
const httpServer = createServer(app);
const port = 4000;
const io = new Server(httpServer);

io.on('connection', (socket) => {
  console.log('a user connected', socket.id, socket.handshake.query.userId);

  connection.query(
    'SELECT * FROM user_entity',
    function (error, results, fields) {
      if (error) throw error;

      for (const result of results) {
        if (result.id === socket.handshake.query.userId) {
          socket.emit('feed', FEED);
        }
      }
    }
  );

  socket.on('disconnect', () => {
    console.log('a user disconnected');
  });
});

httpServer.listen(port, () => {
  console.log(`Socket is listening on port ${port}`);
});
