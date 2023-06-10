'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('emp_info', {
      emp_id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      age: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      gender: {
        type: Sequelize.ENUM('male', 'female', 'other'),
        allowNull: false,
      },
      skills:{
        type: Sequelize.STRING,
        allowNull: false,
        get() {
          const rawValue = this.getDataValue('skills');
          return rawValue ? rawValue.split(',') : [];
        },
        set(value) {
          this.setDataValue('skills', value.join(','));
        },
      },
      experience: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      salary: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      AadharNo: {
        type: Sequelize.BIGINT,
        allowNull: false,
        unique:true
      },
      fileupload: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      mobile_no: {
        type: Sequelize.BIGINT,
        allowNull: false,
        unique:true
      },
      FatherName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      MotherName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Father_occupation: {
        type: Sequelize.STRING,
        allowNull: false,

      },
      Mother_Occupation: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      passwordresettoken: {
        type: Sequelize.STRING,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('emp_info');
  }
};