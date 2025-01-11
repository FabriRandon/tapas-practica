const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Servir archivos estáticos
app.use(express.static(path.join(__dirname)));

// Ruta para obtener el JSON
app.get('/tag.json', (req, res) => {
    const filePath = path.join(__dirname, 'src', 'tag.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).json({ error: 'No se pudo leer el archivo JSON' });
        } else {
            res.json(JSON.parse(data));
        }
    });
});

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
