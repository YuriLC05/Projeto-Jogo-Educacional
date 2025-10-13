const express = require('express');
const router = express.Router();

// Rotas
router.get('/', (req, res) => {
  res.json({ message: 'rota auth funcionando!' });
});

router.get('/login', (req, res) => {
  res.json({ message: 'Rota de login' });
});

// Exporta o router
module.exports = router;
