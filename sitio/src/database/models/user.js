'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsTo(models.Rol, {
        as: 'rol'
      })
       User.belongsToMany(models.Product, {
        as : 'compras',
        through: 'product_users',
        foreignKey:'userId',
        otherKey:'productId'
      }) 
    }
  };
  User.init({
    name: DataTypes.STRING(100),
    lastName: DataTypes.STRING(100),
    email: DataTypes.STRING(100),
    password: DataTypes.STRING(300),
    avatar: DataTypes.STRING(50),
    rolId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};