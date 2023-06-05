const sequelize = require("../config/db")
const { DataTypes, Model } = require("sequelize")
class emp_info extends Model { }

emp_info.init({
  emp_id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  gender: {
    type: DataTypes.ENUM('male', 'female', 'other'),
    allowNull: false,
  },
  skills: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  experience: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  salary: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  AadharNo: {
    type: DataTypes.BIGINT,
    allowNull: false,
    unique:true,
  },
  fileupload: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mobile_no: {
    type: DataTypes.BIGINT,
    allowNull: false,
    unique:true,
  },
  FatherName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  MotherName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Father_occupation: {
    type: DataTypes.STRING,
    allowNull: false,

  },
  Mother_Occupation: {
    type: DataTypes.STRING,
    allowNull: false,
  },
},{
  sequelize,
  modelName: "emp_info",
  freezeTableName: true,
  timestamps: false,
})

module.exports = emp_info