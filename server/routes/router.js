const express = require ('express');
const router = express.Router();

// Ruta Usuarios
const usuariosRouter = require('./usuariosRouter')
router.use('/',usuariosRouter);


// Ruta Paises
const paisesRouter = require('./paisesRouter')
router.use('/',paisesRouter);


// Ruta Ciudades
const ciudadesRouter = require('./ciudadesRouter')
router.use('/',ciudadesRouter);

// Ruta Empresas
const empresasRouter = require('./empresasRouter')
router.use('/',empresasRouter);

// Ruta Habilidades
const habilidadesRouter = require('./habilidadesRouter')
router.use('/',habilidadesRouter);

module.exports = router;












