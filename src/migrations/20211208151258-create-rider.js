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
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      relocator: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      agentInCharge: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      departure: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Locations',
          key: 'id',
        },
      },
      destination: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Locations',
          key: 'id',
        },
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