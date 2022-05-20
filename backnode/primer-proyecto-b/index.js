const app = require("./src/app");

app.listen(app.get("port"), () => {
  console.log("Escuchando en el servidor", app.get("port"));
});
