require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Conexión a la Base de Datos
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString)
    .then(() => console.log(' Base de datos lista en la nube.'))
    .catch((error) => console.log('error de conexión:', error));

// Definimos cómo es un Lugar
const lugarSchema = new mongoose.Schema({
    titulo: String,
    descripcion: String,
    categoria_principal: String,
    etiquetas: [String],
    imagen: String,
    ubicacion: {
        lat: Number,
        lng: Number,
        direccion: String
    },
    rating: Number
}, { collection: 'lugares' });

const Lugar = mongoose.model('Lugar', lugarSchema);

// Rutas (El menú del mesero)
app.get('/', (req, res) => {
    res.send('Backend de GoLocal funcionando ');
});

app.get('/api/lugares', async (req, res) => {
    try {
        const lugares = await Lugar.find();
        res.json(lugares);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

app.get('/api/lugares/:categoria', async (req, res) => {
    try {
        const cat = req.params.categoria;
        const lugares = await Lugar.find({ categoria_principal: cat });
        res.json(lugares);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// Encender
const PORT = 3000;
app.listen(PORT, () => {
    console.log(` Servidor escuchando en el puerto ${PORT}`);
});