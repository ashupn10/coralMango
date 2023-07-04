var express = require('express');
const path = require('path');
require('dotenv').config()
var bodyParser = require('body-parser');
var cors = require('cors')


var signupRoutes = require('./routes/signUp');
const loginRouter = require('./routes/login');
const restaurantRouter=require('./routes/restaurantRoutes');


const sequelize = require('./util/database');
const User = require('./models/user');
const Restaurant=require('./models/restaurant')
const Review=require('./models/review')


var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static('views'));
app.use('/signUp', signupRoutes);
app.use('/login', loginRouter);
app.use('/restaurant',restaurantRouter);

User.hasMany(Review);
Review.belongsTo(User);
Restaurant.hasMany(Review)
Review.belongsTo(Restaurant);

// 
sequelize.sync()
    // sequelize.sync({force:true})
    .then(() => {
        app.listen(3000);
    })