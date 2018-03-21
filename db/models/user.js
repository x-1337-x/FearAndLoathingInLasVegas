const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "user",
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
          notEmpty: true
        },
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          len: [8, 100]
        }
      }
    },
    {
      hooks: {
        beforeCreate: (user, options) => {
          return bcrypt.hash(user.password, 10).then(hash => {
            user.password = hash;
            console.log(user.password);
          });
        }
      }
    }
  );

  return User;
};
