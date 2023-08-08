const express = require ('express');
const router = express.Router();
const ciudadesController = require ('../controllers/ciudades');


router.get('/ciudades',ciudadesController.getAllCiudades);
router.get('/ciudades/:id',ciudadesController.getCiudadesById);

router.post('/ciudades',ciudadesController.post_Ciudades);
router.put('/ciudades/:id',ciudadesController.put_Ciudades);

router.delete('/ciudades/:id',ciudadesController.delete_Ciudades);

module.exports = router;