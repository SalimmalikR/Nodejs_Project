const sequelize = require('../config/db')

const { DataTypes, Model } = require('sequelize')

const emp_info=require('./emp_info')

//Table Creation
class emp_qualification extends Model { }

emp_qualification.init({
  Qua_id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
  },
  college_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  degree: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  stream: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cgpa: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  location: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  HSC_School_name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  HSC_Percentege: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  SSLC_School_name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  SSLC_Percentege: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'emp_info',
      key: 'userId'
    }
  },
},
  {
    sequelize,
    modelName: 'emp_qualification',
    freezeTableName: true,
    timestamps: false,
  })
 emp_qualification.belongsTo(emp_info,{foreignKey: 'userId'});
 emp_info.hasMany(emp_qualification,{foreignKey: 'userId'});


module.exports = emp_qualification
