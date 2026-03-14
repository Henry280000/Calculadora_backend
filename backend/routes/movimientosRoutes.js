const express = require('express');
const router = express.Router();
const { getMovimientos, createMovimiento, deleteMovimiento } = require('../controllers/movimientosController');

//obtener movimientos
router.get('/', getMovimientos);

//agregar movimiento
router.post('/', addMovimientos);

//eliminar movimiento
router.delete('/:id', deleteMovimientos);

module.exports = router;
