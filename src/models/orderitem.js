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
      rideId:DataTypes.INTEGER,
      description: DataTypes.STRING   
    },
    {});
    OrderItem.associate = (models) => {
      OrderItem.belongsTo(models.Rider, {
        foreignKey: 'rideId'
      });
    }
  return OrderItem;
};

