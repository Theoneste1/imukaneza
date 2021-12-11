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
  
    User.associate = (models) => {
      User.hasMany(models.Rider, {
        foreignKey: 'rider'
      });
      User.hasMany(models.Rider, {
        foreignKey: 'relocator'
      });
      
      User.hasMany(models.Rider, {
        foreignKey: 'agentInCharge'
      });
    };
  return User;
};