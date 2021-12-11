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
    rider: DataTypes.INTEGER,
    relocator: DataTypes.INTEGER,
    agentInCharge: DataTypes.INTEGER,
    departure: DataTypes.INTEGER,
    destination: DataTypes.INTEGER,
    status: DataTypes.STRING,
    price: DataTypes.INTEGER,
    discription: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Rider',
  });

  Rider.associate = (models) => {
    Rider.hasMany(models.OrderItem, {
      foreignKey: 'rideId'
    });
    Rider.belongsTo(models.User, {
      foreignKey: 'rider'
    });
    Rider.belongsTo(models.User, {
      foreignKey: 'relocator'
    });
    Rider.belongsTo(models.User, {
      foreignKey: 'agentInCharge'
    });
    Rider.belongsTo(models.Location, {
      foreignKey: 'departure'
    });
    Rider.belongsTo(models.Location, {
      foreignKey: 'destination'
    });
  };
  return Rider;
};