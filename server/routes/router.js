const express = require ('express');
const router = express.Router();

// Ruta Usuarios
// Ruta Empresas
// Ruta Habilidades
// Ruta Paises

// Ruta Ciudades
const ciudadesRouter = require('./ciudadesRouter')
router.use('/',ciudadesRouter)


module.exports = router;

const usuariosController = require ('../controllers/usuarios')
const empresasController = require ('../controllers/empresas')
const habilidadesController = require ('../controllers/habilidades')
const paisesController = require ('../controllers/paises')











