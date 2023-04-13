const express = require('express');
const app = express();
const cors = require('cors');

const authRoutes = require('./routes/auth.js');
const tarefaRoutes = require('./routes/tarefas.js');

app.use(express.json());
app.use(cors());

app.use('/auth', authRoutes);
app.use('/tarefa', tarefaRoutes);

const User = require('./models/User');
app.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro interno no servidor');
  }
});

app.listen(8000, () => {
  console.log('Servidor iniciado na porta 8000');
});
