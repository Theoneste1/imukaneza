'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Riders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      riderNumber: {
        type: Sequelize.STRING
      },
      rider: {
        type: Sequelize.STRING
      },
      relocator: {
        type: Sequelize.STRING
      },
      agentInCharge: {
        type: Sequelize.STRING
      },
      departure: {
        type: Sequelize.INTEGER
      },
      destination: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      discription: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Riders');
  }
};