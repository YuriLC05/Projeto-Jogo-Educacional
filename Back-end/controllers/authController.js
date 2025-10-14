const data = require('../data/data.json');

const login = (req, res) => {
  const { email, senha } = req.body;

  // Garante que "users" é um array mesmo se o JSON estiver vazio ou malformado
  const users = Array.isArray(data.users) ? data.users : [];

  // Verifica se o email e senha foram enviados
  if (!email || !senha) {
    return res.status(400).json({ error: 'Email e senha são obrigatórios.' });
  }

  // Procura o usuário no JSON (agora usando "users" e ignorando maiúsculas/minúsculas)
  const user = users.find(u => u.email === email);

  // Valida usuário e senha
  if (!user) {
    return res.status(404).json({ error: 'Usuário não encontrado.' });
  }

  if (user.senha !== senha) {
    return res.status(401).json({ error: 'Senha incorreta.' });
  }

  // Retorna dados do usuário (sem mostrar a senha)
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
