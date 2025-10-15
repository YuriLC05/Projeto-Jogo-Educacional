const express = require('express');
const router = express.Router();


const { login, register } = require('../controllers/authController');


router.get('/', (req, res) => {
  res.json({ message: 'rota auth funcionando!' });
});


router.post('/login', login);
router.post('/register', register);


module.exports = router;
