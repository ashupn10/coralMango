const express=require('express');
const router=express.Router();
const auth=require('../middleware/auth');
const restaurantControllers=require('../controllers/restaurantControllers');
const reviewControllers=require('../controllers/reviewController');

router.get('/',auth.UserAuthentication,restaurantControllers.getRestaurant);
router.get('/review',auth.UserAuthentication,reviewControllers)
router.post('/addRestaurant',auth.UserAuthentication,restaurantControllers.addRestaurant);


module.exports=router;