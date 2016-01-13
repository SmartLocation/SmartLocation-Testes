var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile('index.html' , { root : __dirname});
});

app.use(express.static('public'));

    io.on('connection', function(socket){
        console.log('## New Connection!');
        socket.on('newposition', function(position){
        /*io.emit('chat message', msg);*/
        console.log(position);
    });

});

http.listen(process.env.PORT, function(){
console.log('listening on *:'+process.env.PORT);
});