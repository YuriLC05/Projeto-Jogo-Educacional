const express = require('express');
const router = express.Router();

// Importa a função login do controller
const { login } = require('../controllers/authController');

// Rota de teste opcional
router.get('/', (req, res) => {
  res.json({ message: 'rota auth funcionando!' });
});

// Rota POST /auth/login usando o controller real
router.post('/login', login);

// Exporta o router
module.exports = router;
