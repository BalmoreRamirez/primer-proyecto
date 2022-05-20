const express = require("express");
const respuesta = require("../../red/respuesta");
const controlador = require("./controlador");

const router = express.Router();

router.get("/", todos);
router.get("/:id", uno);
router.post("/", agregar);
router.put("/", eliminar);

async function todos(req, res, next) {
  try {
    const items = await controlador.todos();
    respuesta.success(req, res, items, 200);
  } catch (error) {
    next(error);
  }
}

async function uno(req, res, next) {
  try {
    const items = await controlador.uno(req.params.id);
    respuesta.success(req, res, items, 200);
  } catch (error) {
    next(error);
  }
}

async function agregar(req, res, next) {
  try {
    const items = await controlador.agregar(req.body);
    if (req.body.id == 0) {
      mensaje = "Item guardado con exito";
    } else {
      mensaje = "Items actualizado con exito";
    }
    respuesta.success(req, res, mensaje, 201);
  } catch (error) {
    next(error);
  }
}

async function eliminar(req, res, next) {
  try {
    const items = await controlador.eliminar(req.body);
    respuesta.success(req, res, "items eliminado ok", 200);
  } catch (error) {
    next(error);
  }
}
module.exports = router;
