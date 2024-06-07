const express = require('express');
const app = express();
const port = 9420;

// Ruta de ejemplo
app.get('/', (req, res) => {
    // Ruta al archivo HTML que deseas servir
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor Express.js corriendo en http://localhost:${port}`);
});