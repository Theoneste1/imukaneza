module.exports = (sequelize, DataTypes) => {

  const Transaction = sequelize.define(
    "Transaction",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      rideId: DataTypes.INTEGER,
      relocator: DataTypes.INTEGER,
      price:DataTypes.INTEGER,
      status: DataTypes.STRING,    
    },
    {})
  
  return Transaction;
};