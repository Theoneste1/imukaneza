'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Location extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Location.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Location',
  });

  Location.associate = (models) => {
    
    Location.hasMany(models.Rider, {
      foreignKey: 'departure',
      onDelete: 'cascade'
    });
    Location.hasMany(models.Rider, {
      foreignKey: 'destination',
      onDelete: 'cascade'
    });
  };
  return Location;
};