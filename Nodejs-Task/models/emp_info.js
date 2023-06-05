'use strict';
const {
  Model
} = require('sequelize');
const emp_address = require('./emp_address');
const emp_qualification = require('./emp_qualification');
module.exports = (sequelize, DataTypes) => {
  class emp_info extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  emp_info.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'emp_info',
  });

  emp_info.associate = (models) => {
    emp_info.hasMany(models.emp_qualification, { foreignKey: 'userId' });
  };
  emp_info.associate = (models) => {
    emp_info.hasMany(models.emp_address, { foreignKey: 'userId' });
  };
  return emp_info;
};


