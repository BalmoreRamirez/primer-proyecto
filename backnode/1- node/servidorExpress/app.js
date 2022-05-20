const express = require('express');
const server = express();
const data = [
    {
        name: "jose",
        age: 28
    }, {
        name: "Maria",
        age: 27
    }
];

server.get('/', function (req, res) {
    res.send("Express y nodejs");
    res.end();
});

//users
server.get('/users', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(data));
});

server.listen(3000, function () {
    console.log("Server Runnig")
});
