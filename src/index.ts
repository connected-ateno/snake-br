import express from 'express';
import http from 'http';
import path from 'path';
import socketio from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.get('/', (_, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});
