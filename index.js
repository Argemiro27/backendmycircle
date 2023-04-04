const express = require('express');
const connection = require('./db');

const app = express();

app.get('/users', (req, res) => {
  connection.query('SELECT * FROM users', (err, results, fields) => {
    if (err) {
      console.log(err);
      res.status(500).send('Erro interno no servidor');
    } else {
      res.status(200).json(results);
    }
  });
});

app.listen(8000, () => {
  console.log('Servidor iniciado na porta 8000');
});