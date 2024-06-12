'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    static associate(models) {
      Car.belongsTo(models.Owner, { foreignKey: 'ownerId', as: 'owner' });
    }
  }

  Car.init({
    make: DataTypes.STRING,
    model: DataTypes.STRING,
    year: DataTypes.INTEGER,
    ownerId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Car',
  });

  return Car;
};
