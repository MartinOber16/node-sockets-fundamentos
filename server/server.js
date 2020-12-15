const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const path = require('path');

const app = express();
let server = http.createServer(app); // porque socket.io no trabaja con express

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// Esta es la comunicación del backend
//let io = socketIO(server);
module.exports.io = socketIO(server);
require('./sockets/socket');

//app.listen(port, (err) => {
server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});