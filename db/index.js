const Sequelize = require('sequelize');

const sequelize = new Sequelize('test_db', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres',
});

// if(process.env.DATABASE_URL) sequelize.config.host = process.env.DATABASE_URL;

console.log(process.env.DATABASE_URL)
const User = sequelize.import('./models/user');

module.exports = {
  sequelize,
  User
}