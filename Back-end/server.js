const express = require('express');
const app = express();
const cors = require('cors');

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
const authRoutes = require('./routes/auth');
const studentRoutes = require('./routes/students');
const progressRoutes = require('./routes/progress');

app.use('/auth', authRoutes);
app.use('/students', studentRoutes);
app.use('/progress', progressRoutes);

// Servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => { console.log(`Servidor rodando na porta ${PORT}`)});
