'use strict';
const bcrypt = require('bcrypt')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('emp_info', [{
      firstName: "Admin",
      lastName: "NovaStrids",
      email: "salim@gmail.com",
      password: await bcrypt.hash('Salim@123', 10),
      age: 22,
      gender:"male",
      skills:JSON.stringify(['Javascript', 'Nodejs']),
      experience: 1,
      salary: 15000.0,
      AadharNo: 123456789012,
      fileupload: "image/jpg",
      mobile_no: 1234567890,
      FatherName: "Rasik bareeth",
      MotherName: "Fathima Jinna",
      Father_occupation: "Business",
      Mother_Occupation: "Home maker",
    }],);

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('emp_info', null, {});

  }
};
