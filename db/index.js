const Sequelize = require('sequelize');
const sequelize = new Sequelize('test_db', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres',
});

const User = sequelize.import('./models/user');

module.exports = {
  sequelize,
  User
}