const mongoose = require('mongoose');

const gastoSchema = mongoose.Schema(
    {
        descripcion: {
            type: String, 
            required: [true, 'Por favor ingresa una descripción del gasto']
        },
        importe: {
            type: Number, 
            required: [true, 'Por favor ingresa el monto del gasto']
        },
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Gasto', gastoSchema);