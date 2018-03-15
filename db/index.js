const Sequelize = require('sequelize');

const sequelize = new Sequelize('test_db', 'postgres', 'postgres', {
  host: (process.env.DATABASE_URL || 'localhost'),
  dialect: 'postgres',
});


console.log(process.env.DATABASE_URL)
console.log(sequelize.config.host)
const User = sequelize.import('./models/user');

module.exports = {
  sequelize,
  User
}