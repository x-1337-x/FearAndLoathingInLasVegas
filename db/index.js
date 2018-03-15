const Sequelize = require('sequelize');

let sequelize;

if(process.env.DATABASE_URL) {
  sequelize = new Sequelize(process.env.DATABASE_URL);
} else {
  sequelize = new Sequelize('test_db', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres',
  });
}


console.log(process.env.DATABASE_URL)
console.log(sequelize.config.host)
const User = sequelize.import('./models/user');

module.exports = {
  sequelize,
  User
}