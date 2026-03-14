const assyncHandler = require("express-async-handler");
const Gasto = require('../models/gastosModel');
const { get } = require('mongoose')

const getMovimientos = assyncHandler  (async (req, res) => {
    const movimientos = await Gasto.find({});
    res.status(200).json(movimientos);
});

const addMovimiento = assyncHandler  (async (req, res) => {
    if (!req.body.descripcion) {
        res.status(400)
        throw new Error('Por favor, ingrese una descripción')
    }
    if (!req.body.importe) {
        res.status(400)
        throw new Error('Por favor, ingrese un importe')
    }
    const movimiento = await Gasto.create({
        descripcion: req.body.descripcion,
        importe: req.body.importe
    })
    if (movimiento) {
        res.status(201).json(movimiento)
    } else {
        res.status(500)
        throw new Error('Hubo un error')
    }
});

const deleteMovimiento = assyncHandler(async (req, res) => {
    const movimiento = await Gasto.findById(req.params.id)

    if (!movimiento){
        res.status(404)
        throw new Error('Gasto no encontrado')
    } else {
    await Gasto.deleteone(movimiento)
    res.status(200).json({ "mensaje": `Movimiento ${req.params.id} eliminado` })
    }
})  ;

module.exports = {
    getMovimientos,
    addMovimiento,
    deleteMovimiento
}