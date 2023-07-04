const Sequelize=require('sequelize');
const sequelize=require('../util/database');

const User=sequelize.define('restaurant',{
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
    name:Sequelize.STRING,
    imageUrl:Sequelize.STRING,
    description:Sequelize.STRING,
    email:Sequelize.STRING,
    mobile:Sequelize.STRING,
    pincode:Sequelize.INTEGER,
    city:Sequelize.STRING,
    locality:Sequelize.STRING,
    state:Sequelize.STRING,
    country:Sequelize.STRING,
    isDeleted:{
        type:Sequelize.BOOLEAN,
        default:false
    },
    deletedBy:{
        type:Sequelize.UUID,
    },
    updatedBy:{
        type:Sequelize.UUID,
    }

})

module.exports=User;