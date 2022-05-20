const http = require("http");

// http
//   .createServer(function (req, res) {
//     console.log("Nueva peticion");
//     console.log(req.url);

//     res.writeHead(201,{'Content-Type':'text/plain'})

//     res.write('Hola, ya puedo usar HTTP de NodeJs')
//     res.end()
//   })
//   .listen(3000);
// console.log("Esta escuchando en el puerto 3000");

http.createServer(router).listen(3000);

function router(req, res) {
  console.log("Nueva peticion");
  console.log(req.url);

  switch (req.url) {
    case "/hola":
      res.write("Hola, que tal");
      res.end();
      break;
    default:
      res.write("error 404");
      res.end();
  }
}
console.log("Esta escuchando en el puerto 3000");
