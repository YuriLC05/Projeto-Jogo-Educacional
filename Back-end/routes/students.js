const express = require('express');
const router = express.Router();

// Rotas

router.get('/', (req, res) => {
    res.send('Rota de estudantes funcionando!');
});

module.exports = router; 
