const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');
const User = require('./User');

class Tarefa extends Model {}

Tarefa.init({
  nametarefa: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  //UserId: {
  //  type: DataTypes.INTEGER,
  //  references: {
  //    model: User,
  //    key: 'id'
  //  }
  //}
}, {
  sequelize,
  modelName: 'tarefas',
  underscored: true
});

Tarefa.belongsTo(User);

module.exports = Tarefa;
