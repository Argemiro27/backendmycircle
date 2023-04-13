const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('schedzagenda', 'root', 'root', {
  dialect: 'mysql',
  host: 'localhost'
});

async function connect() {
  try {
    await sequelize.authenticate();
    console.log('Conexão estabelecida com sucesso!');
  } catch (error) {
    console.error('Não foi possível conectar ao banco de dados:', error);
  }
}

connect();

module.exports = sequelize;