module.exports = app => {
  // Aqui puedo definir otra variable con otro controlador para que acceda a los metodos con estas rutas

  const router = require("express").Router();

  const usuario = require("../controllers/usuarios.controller.js");

  // Create a new Usuario
  router.post("/", usuario.create);

  // Retrieve all usuario
  router.get("/usuarios", usuario.findAll);

  // Retrieve all published usuario
  router.get("/published", usuario.findAllPublished);

  // Retrieve a single Usuario with id
  //router.get("/:id", usuario.findOne);

  // Update a Usuario with id
  // router.put("/:id", usuario.update);

  // Delete a Usuario with id
  // router.delete("/:id", usuario.delete);

  // Delete all usuario
  // router.delete("/", usuario.deleteAll);


                      // PRODUCTOS
  
  const producto= require("../controllers/productos.controller.js");

  // Crear producto
  router.post("/prod", producto.create);

  // Traer todos los productos
  router.get("/prods", producto.findAll);

  // Retrieve all published producto
  router.get("/publishedProds", producto.findAllPublished);

  // Buscar por categoria
  router.post("/prodCategory/:categoria", producto.findByCategory);

  // Buscar por letra
  // Se usa params cuando se manda un dato por url, como en esta
  router.post("/prodLetra/:letra", producto.findByLetra);

  // Buscar por id
  // Se usa body en las que se manda los datos en el cuerpo, como un objeto o array
  router.post("/prodId", producto.findById);

                    // PEDIDOS

  const pedido = require("../controllers/pedidos.controller.js");

  // Añadir pedido
  router.post("/pedido", pedido.create);

  // Traer pedido con id
  router.post("/encontrarPed/:idUser", pedido.findByIdUsuario);

  // Borrar pedido con id
  router.delete("/borrarPed/:id", pedido.delete);
  
  //api es el nombre por defecto de mi ruta, luego se ponen el resto
  app.use('/api', router);

};
