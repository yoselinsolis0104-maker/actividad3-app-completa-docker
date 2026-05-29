const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());

mongoose.connect('mongodb://mongo:27017/actividad3');

mongoose.connection.once('open', () => {
    console.log('MongoDB conectado');
});

app.get('/api', (req, res) => {
    res.json({
        mensaje: 'Hola desde el Back-End'
    });
});

app.listen(3000, () => {
    console.log('Servidor ejecutándose en puerto 3000');
});