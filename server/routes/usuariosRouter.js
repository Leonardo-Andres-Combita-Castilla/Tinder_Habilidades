const express = require ('express');
const router = express.Router();
const usuariosController = require ('../controllers/usuariosController');

router.get('/usuarios',usuariosController.getAllUsuarios);
router.get('/usuarios/:id',usuariosController.getUsuariosById);

router.post('/usuarios',usuariosController.post_Usuarios);
router.put('/usuarios/:id',usuariosController.put_Usuarios);

router.delete('/usuarios/:id',usuariosController.delete_Usuarios);

module.exports = router;