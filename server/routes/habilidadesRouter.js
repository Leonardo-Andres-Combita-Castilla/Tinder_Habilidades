const express = require ('express');
const router = express.Router();
const ciudadesController = require ('../controllers/habilidadesController');

router.get('/habilidades',ciudadesController.getAllHabilidades);
router.get('/habilidades/:id',ciudadesController.getHabilidadesById);

router.post('/habilidades',ciudadesController.post_Habilidades);
router.put('/habilidades/:id',ciudadesController.put_Habilidades);

router.delete('/habilidades/:id',ciudadesController.delete_Habilidades);

module.exports = router;