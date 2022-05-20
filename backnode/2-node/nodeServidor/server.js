const express = require("express");
const bodyParser = require("body-parser");

const response = require("./network/response");

//separa cabecera metodo, url
const router = express.Router();

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

//get
router.get("/", function (req, res) {
  console.log(req.headers);
  res.header({
    "custom-header": "Nuestro valor personalizado",
  });
  response.success(req, res, "La peticion es exitosa");
});

//get
router.get("/mensaje", function (req, res) {
  console.log(req.headers);
  res.header({
    "custom-header": "Nuestro valor personalizado",
  });
  response.success(req, res, "Lista de mensaje");
});

//delete
router.delete("/mensaje", function (req, res) {
  response.success(req, res, "Eliminado correctamente");
});

router.post("/mensaje", function (req, res) {
  console.log(req.query); //Parametros por query => http://localhost:3000/mensaje?orderBy=id&age=15

  if (req.query.error == "ok") {
    response.error(
      req,
      res,
      "Error inesperado",
      500,
      "es solo una simulacion de roor"
    );
  }
  response.success(req, res, "Creado correctamente", 201);
});

app.use("/app", express.static("public"));

app.listen(3000);
console.log("la app esta escuchando en el puerto 3000");
