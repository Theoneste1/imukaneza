'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING,
      },
      lastName: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      resetLink: {
        type: Sequelize.STRING,
      },
      phoneNumber: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      homeAddress: {
        type: Sequelize.STRING,
      },
      userAccess: {
        type: Sequelize.STRING,
        defaultValue: "subAdmin",
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING,
        defaultValue: "disactivate",
      },
      verified: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: "false",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};