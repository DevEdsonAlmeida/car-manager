
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Owner extends Model {
    static associate(models) {
      Owner.hasMany(models.Car, { foreignKey: 'ownerId', as: 'cars' });
    }
  }

  Owner.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Owner',
  });

  return Owner;
};
