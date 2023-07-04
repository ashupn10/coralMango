const Sequelize=require('sequelize');
const sequelize=require('../util/database');

const User=sequelize.define('reviews',{
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
    },
    userId:{
        type:Sequelize.UUID,
    },
    restaurantId:{
        type:Sequelize.UUID,
    },
    rating:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    textReview:Sequelize.STRING,
    isDeleted:Sequelize.BOOLEAN,
    deletedBy:Sequelize.UUID,
})

module.exports=User;