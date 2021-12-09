module.exports = (sequelize, DataTypes) => {

  const Rating = sequelize.define(
    "Rating",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      rate: DataTypes.INTEGER,
      relocator: DataTypes.INTEGER,    
      description: DataTypes.STRING,
    },
    {})
  
  return Rating;
};
