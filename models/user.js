const Sequelize=require('sequelize');
const sequelize=require('../util/database');

const User=sequelize.define('user',{
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
    name:Sequelize.STRING,
    email:Sequelize.STRING,
    mobile:Sequelize.STRING,
    password:Sequelize.STRING,
    city:Sequelize.STRING,
    locality:Sequelize.STRING,
    country:Sequelize.STRING,
    isAdmin:{
        type:Sequelize.BOOLEAN,
        default:false
    },
    isDeleted:{
        type:Sequelize.BOOLEAN,
        default:false
    },
    updatedBy:{
        type:Sequelize.UUID,
    }
})

module.exports=User;