const Sequelize = require('sequelize');
const sequelize = new Sequelize('test_db', 'postgres', 'postgres', {
  host: process.env.DATABASE_URL || 'localhost',
  dialect: 'postgres',
});

const User = sequelize.import('./models/user');

module.exports = {
  sequelize,
  User
}