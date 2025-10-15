const fs = require('fs');
const path = require('path');
const dataPath = path.join(__dirname, '../data/data.json');

const data = require('../data/data.json');

const login = (req, res) => {
  const { email, senha } = req.body;


  const users = Array.isArray(data.users) ? data.users : [];


  if (!email || !senha) {
    return res.status(400).json({ error: 'Email e senha são obrigatórios.' });
  }


  const user = users.find(u => u.email === email);


  if (!user) {
    return res.status(404).json({ error: 'Usuário não encontrado.' });
  }

  if (user.senha !== senha) {
    return res.status(401).json({ error: 'Senha incorreta.' });
 }


  res.status(200).json({
    message: 'Login realizado com sucesso!',
    user: {
      id: user.id,
      nome: user.nome,
      email: user.email
    }
  });
};

const register = (req, res) => {
  const { email, senha } = req.body;
  const users = Array.isArray(data.users) ? data.users : [];

  if (!email || !senha) {
    return res.status(400).json({ error: 'Nome, email e senha são obrigatórios.' });
  }

  const userExists = users.some(u => u.email === email);
  if (userExists) {
    return res.status(409).json({ error: 'Este email já está cadastrado.' });
  }

  const randomId = Math.floor(Math.random() * 100000);
  const tempName = `quest${randomId.toString().padStart(3, '0')}`;

  const newUser = {
    id: users.length + 1,
    email,
    senha,
    nome: tempName
  };

  users.push(newUser);

  fs.writeFileSync(dataPath, JSON.stringify({ users }, null, 2));

  res.status(201).json({
    message: 'Usuário registrado com sucesso!',
    user: { id: newUser.id, nome: newUser.nome, email: newUser.email }
  });


};





module.exports = {login, register};
