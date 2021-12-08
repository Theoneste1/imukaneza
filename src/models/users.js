module.exports = (sequelize, DataTypes) => {

  const User = sequelize.define(
    "User",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      resetLink: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      status: DataTypes.STRING,
      verified: DataTypes.BOOLEAN,
      homeAddress: DataTypes.STRING,
      userAccess: DataTypes.STRING,
      
    },
    {})
  
	// User.associate = (models) => {
	// 	User.belongsTo(models.MODEL NAME, {
  //     foreignKey: "ID",
  //     as: "FIELD NAME",
  //   });
	// }
  return User;
};