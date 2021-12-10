'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rider extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Rider.init({
    riderNumber: DataTypes.STRING,
    rider: DataTypes.STRING,
    relocator: DataTypes.STRING,
    agentInCharge: DataTypes.STRING,
    departure: DataTypes.INTEGER,
    destination: DataTypes.INTEGER,
    status: DataTypes.STRING,
    price: DataTypes.INTEGER,
    discription: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Rider',
  });
  return Rider;
};