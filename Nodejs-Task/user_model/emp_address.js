const sequelize = require('../config/db')

const { DataTypes, Model } = require('sequelize')

const emp_info = require('./emp_info');

//Table Creation
class emp_address extends Model {

}

emp_address.init({
  add_id: {
    primaryKey:true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
  },
  DoorNo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  street_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Area: {
    type: DataTypes.STRING,
    allowNull: false
  },
  city: {
    allowNull: false,
    type: DataTypes.STRING
  },
  state: {
    allowNull: false,
    type: DataTypes.STRING
  },
  pincode: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: emp_info,
      key: 'userId'
    }
  }
}, {
  sequelize,
  modelName: 'emp_address',
  freezeTableName: true,
  timestamps: false,
})

emp_address.belongsTo(emp_info,{foreignKey: 'userId'});
emp_info.hasMany(emp_address,{foreignKey: 'userId'});

module.exports = emp_address
