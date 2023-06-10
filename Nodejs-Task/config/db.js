const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT
});
sequelize.authenticate().then(()=>{
    console.log('DB successfully Connected!');
}).catch((err)=>{
    console.log('Failed to Connect');
})

module.exports=sequelize