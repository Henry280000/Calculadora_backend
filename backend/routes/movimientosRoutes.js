const express = require('express');
const router = express.Router();
const { getMovimientos, addMovimiento, deleteMovimiento } = require('../controllers/movimientosControllers');

//obtener movimientos
router.get('/', getMovimientos);

//agregar movimiento
router.post('/', addMovimiento);

//eliminar movimiento
router.delete('/:id', deleteMovimiento);

module.exports = router;
