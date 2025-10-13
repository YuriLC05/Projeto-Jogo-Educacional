const express = require('express');
const router = express.Router();

// Rotas

router.get('/', (req, res) => {
    res.send('Rota de progresso');
});

module.exports = router; 
