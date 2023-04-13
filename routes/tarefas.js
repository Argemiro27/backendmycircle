const express = require('express');
const Tarefa = require('../models/Tarefa');

const router = express.Router();

router.post('/newtarefa', async (req, res) => {
  try {
    const { nametarefa, description } = req.body;
    const tarefa = new Tarefa({ nametarefa, description });
    await tarefa.save();
    res.status(201).json({ message: 'Tarefa cadastrada com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
});

module.exports = router;
