const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

// Create an Express application
const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Track connected players
let players = {};

// Serve static files if needed
app.use(express.static('public'));

// REST API endpoint to get the current players
app.get('/api/players', (req, res) => {
    return res.json(players);
});

// When a client connects
io.on('connection', (socket) => {
    console.log('A player connected:', socket.id);

    // Add new player to players object
    players[socket.id] = { x: 0, y: 0 }; // Initial position

    // Notify other players about new player
    socket.broadcast.emit('playerJoined', { id: socket.id, position: players[socket.id] });

    // Handle player movement
    socket.on('move', (data) => {
        if (players[socket.id]) {
            players[socket.id].x += data.x;
            players[socket.id].y += data.y;
            socket.broadcast.emit('playerMoved', { id: socket.id, position: players[socket.id] });
        }
    });

    // Handle player action events
    socket.on('action', (action) => {
        socket.broadcast.emit('playerAction', { id: socket.id, action });
    });

    // Remove player when they disconnect
    socket.on('disconnect', () => {
        console.log('Player disconnected:', socket.id);
        delete players[socket.id];
        socket.broadcast.emit('playerLeft', { id: socket.id });
    });
});

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
