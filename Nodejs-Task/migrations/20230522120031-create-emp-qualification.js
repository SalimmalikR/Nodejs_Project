'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('emp_qualification', {
      Qua_id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
      },
      college_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      degree: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      stream: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cgpa: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      location: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      HSC_School_name: {
        allowNull: false,
        type: Sequelize.STRING,

      },
      HSC_Percentege: {
        type: Sequelize.FLOAT,
        allowNull: false,

      },
      SSLC_School_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      SSLC_Percentege: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('emp_qualification');
  }
};