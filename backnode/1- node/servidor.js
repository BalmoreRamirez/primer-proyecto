// const http = require('http');
// const handleServer = function (req, res) {
//     res.write("Servidor de NodeJs");
//     res.end();
// }
//
// const server = http.createServer(handleServer);
// server.listen(3000, function () {
//     console.log("Server running");
// });
//

const EventEmitter = require('events');
const emiter = new EventEmitter();

emiter.on('miEvento',function(args){
    console.log("Escuchando evento",args);
});
emiter.emit('miEvento',{
    id:1,
    mensaje:'Hola'
});
