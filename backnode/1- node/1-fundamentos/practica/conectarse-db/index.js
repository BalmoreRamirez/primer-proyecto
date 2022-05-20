const { Client } = require("pg");

const obtenerCategorias = async () => {
  const client = new Client({
    user: "root",
    host: "localhost",
    database: "nodetest",
    password: "",
    port: 3306,
    ssl: {
      rejectUnauthorized: false,
    },
  });

  await client.connect();
  const res = await client.query("select * from alumnos");
  const result = res.rows;

  await client.end();

  return result;
};

obtenerCategorias().then((result) => {
  console.log(result);
});
