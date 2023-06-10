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
  // Skills: {
  //   type: DataTypes.STRING, // Multiselect field
  //   allowNull: false,
  //   set(value) {
  //     if (Array.isArray(value)) {
  //       this.setDataValue('Skills', value.join(','));
  //     } else {
  //       this.setDataValue('Skills', value);
  //     }
  //   }
  // },
  skills:{
    type: DataTypes.STRING,
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
    unique: true,
  },
  fileupload: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  mobile_no: {
    type: DataTypes.BIGINT,
    allowNull: false,
    unique: true,
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
  passwordresettoken: {
    type: DataTypes.STRING,
  },
}, {
  sequelize,
  modelName: "emp_info",
  freezeTableName: true,
  timestamps: false,
})

module.exports = emp_info