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

module.exports = { login };
