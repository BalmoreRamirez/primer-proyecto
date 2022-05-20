const express = require("express");
const res = require("express/lib/response");
const app = express();

app.use(express.json());

//Alumnos
const students = [
    {id: 1, name: "jose", age: "18", enroll: true},
    {id: 2, name: "Mario", age: "30", enroll: true},
    {id: 3, name: "Joel", age: "24", enroll: true},
    {id: 4, name: "Jenny", age: "28", enroll: true},
];

//ruta inicial
app.get("/", (req, res) => {
    res.send("Node JS api");
});

//Muestra todos los alumnos
app.get("/api/students", (req, res) => {
    res.send(students);
});

//Muestra un alumno en espesifico
app.get("/api/students/:id", (req, res) => {
    const student = students.find((c) => c.id === parseInt(req.params.id));
    if (!student) return res.status(404).send("Estudiante no encontrado");
    else res.send(student);
});

//Guarda el dato de un alumno
app.post("/api/students", (req, res) => {
    const student = {
        id: (students.length = 1),
        name: req.body.name,
        age: parseInt(req.body.age),
        enroll: req.body.enroll === "true",
    };
    students.push(student);
    res.send(student);
});

//Borra los datos de un alumno, de acuerdo con el id
app.delete("/api/students/:id", (req, res) => {
    const student = students.find((c) => c.id === parseInt(req.params.id));
    if (!student) return res.status(404).send("Estudiante no encontrado");

    const index = students.indexOf(students);
    students.splice(index, 1);
    res.send(student);
});

//El pierto en el cual esta operando la API
const port = process.env.port || 80;
app.listen(port, () => console.log(`Escuchando en puerto ${port}....`));
