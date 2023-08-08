const express = require ('express');
const router = express.Router();
const empresasController = require ('../controllers/empresasController');

router.get('/empresas',empresasController.getAllEmpresas);
router.get('/empresas/:id',empresasController.getEmpresasById);

router.post('/empresas',empresasController.post_Empresas);
router.put('/empresas/:id',empresasController.put_Empresas);

router.delete('/empresas/:id',empresasController.delete_Empresas);

module.exports = router;