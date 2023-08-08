const express = require ('express');
const router = express.Router();
const paisesController = require ('../controllers/paisesController');

router.get('/paises',paisesController.getAllPaises);
router.get('/paises/:id',paisesController.getPaisesById);

router.post('/paises',paisesController.post_Paises);
router.put('/paises/:id',paisesController.put_Paises);

router.delete('/paises/:id',paisesController.delete_Paises);

module.exports = router;