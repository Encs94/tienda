const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
// Aqui es donde defino como van a crearse las tablas por defecto.
// Para no cambiar las tablas hay que poner el force a false
db.sequelize.sync({ force: true })
  .then(() => {
    db.usuario.bulkCreate([
      {usuario:"admin", contraseña: 123, nombre:"Joaquin", apellidos:"ah", telefono: 616231435, direccion:"Nisu"}
    ])
    db.categoria.bulkCreate([
      {nombre: "Mangas"},
      {nombre: "Comics"},
      {nombre: "Figuras"},
      {nombre: "Juegos"}
    ])
    console.log("Synced db.");
  })
  .then(() => {
    db.producto.bulkCreate([
      {nombre: "Naruto nº2", imagen:"narutoT2", descripcion: "Tomo nº 2", precio: 12, idCategory: 1},
      {nombre: "Goku", imagen:"goku", descripcion: "Figura articulada", precio: 12, idCategory: 3},
      {nombre: "Catan", imagen:"catan", descripcion: "Juego de 3 a 6 jugadores", precio: 12, idCategory: 4},
      {nombre: "Naruto nº1", imagen:"narutoT1", descripcion: "Tomo nº 1", precio: 12, idCategory: 1},
      {nombre: "Brazo", imagen:"brazo", descripcion: "Accesorio", precio: 12, idCategory: 3},
      {nombre: "Sinchan", imagen:"sinchan", descripcion: "Comic a color", precio: 12, idCategory: 2},
      {nombre: "Batman", imagen:"batman", descripcion: "Comic BatmanMan", precio: 12, idCategory: 2},
      {nombre: "ManBat", imagen:"manbat", descripcion: "Comin ManBatman", precio: 12, idCategory: 2},
      {nombre: "Risk", imagen:"risk", descripcion: "Juego de mesa bélico", precio: 12, idCategory: 4},
      {nombre: "Han Solo", imagen:"hanSolo", descripcion: "Figura star wars", precio: 12, idCategory: 2}
    ])

    console.log("Synced db.");
  })

  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

require("./app/routes/routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
