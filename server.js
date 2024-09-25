const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('public'));

const button1Namespace = io.of('/button1');
button1Namespace.on('connection', (socket) => {
  console.log('User connected to button1 namespace', socket.id);

  socket.on('message_from_button', (data) => {
    console.log(`Message from button1: ${data.message}`);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected from button1 namespace');
  });
});

const button2Namespace = io.of('/button2');
button2Namespace.on('connection', (socket) => {
  console.log('User connected to button2 namespace', socket.id);

  socket.on('message_from_button', (data) => {
    console.log(`Message from button2: ${data.message}`);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected from button2 namespace');
  });
});

const button3Namespace = io.of('/button3');
button3Namespace.on('connection', (socket) => {
  console.log('User connected to button3 namespace', socket.id);

  socket.on('message_from_button', (data) => {
    console.log(`Message from button3: ${data.message}`);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected from button3 namespace');
  });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});
