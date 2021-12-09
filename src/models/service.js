module.exports = (sequelize, DataTypes) => {

  const Service = sequelize.define(
    "Service",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      status: DataTypes.STRING,    
    },
    {})
  
  return Service;
};
