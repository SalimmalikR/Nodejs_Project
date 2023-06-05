'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('emp_address', {
      add_id: {
        primaryKey:true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
      },
      DoorNo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      street_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Area: {
        type: Sequelize.STRING,
        allowNull: false
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING
      },
      state: {
        allowNull: false,
        type: Sequelize.STRING
      },
      pincode: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      country: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('emp_address');
  }
};