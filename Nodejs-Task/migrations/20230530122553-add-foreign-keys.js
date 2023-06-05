'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('emp_qualification', 'userId', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'emp_info',
        key: 'emp_id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });

    await queryInterface.addColumn('emp_address', 'userId', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'emp_info',
        key: 'emp_id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('emp_qualification', 'userId');
    await queryInterface.removeColumn('emp_address', 'userId');
  }
};
