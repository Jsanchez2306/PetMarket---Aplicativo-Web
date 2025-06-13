const mongoose = require('../config/conect.js'); // Asegúrate de que la ruta sea correcta

const esquemaCliente = mongoose.Schema({

    correo: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    contrasena: {
        type: String,
        required: true,
        minlength: 6
    },
    fechaRegistro: {
        type: Date,
        default: Date.now
    }
});

const cliente = mongoose.model('cliente', esquemaCliente);

module.exports = cliente;