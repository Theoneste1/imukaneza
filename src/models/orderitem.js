module.exports = (sequelize, DataTypes) => {

  const OrderItem = sequelize.define(
    "OrderItem",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      itemName: DataTypes.STRING,
      quantity: DataTypes.STRING,
      description: DataTypes.STRING,
      rideId: DataTypes.INTEGER,    
    },
    {})
  
  return OrderItem;
};

