'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('emp_qualification', [{
      college_name:'KLN College of engineering',
      degree:'B.E',
      stream:'EEE',
      cgpa:8.2,
      location:'Madurai',
      HSC_School_name:'PACM Hr Sec School',
      HSC_Percentege:72,
      SSLC_School_name:'Valluvar Vidhyalaya Hr Sec School',
      SSLC_Percentege:92,
      userId:1,
      }], {});

  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('emp_qualification', null, {});
  }
};
