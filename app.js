app.listen(port, () => console.log(`Example app listening on port ${port}!`))
socket.emit('new player');
setInterval(function() {

}, 1000 / 60);
var socket = io();
socket.on('message', function(data) {
  console.log(data);
});

const express = require('express')
const app = express()
const port = 3000;
