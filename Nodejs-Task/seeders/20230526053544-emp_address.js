'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('emp_address', [{
      DoorNo:120,
      street_name:'Angaiar Kanni Street, Balaji Nagar,',
      Area:'Thiruparakundram',
      city:'Madurai',
      state:'tamilnadu',
      pincode:625005,
      country:'India',
      userId:1,
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('emp_address', null, {});

  }
};
