const Restaurant=require('../models/restaurant');
const Reviews=require('../models/review');

/*
    description: this api only works for the admin who can add restaurant through this
    request: {name,imageUrl,description,email,mobile,pincode,city,state,locality,country};
    params: {}
    response:return added restaurant
    createdBy : Ashutosh Mishra
*/
exports.addRestaurant=async (req,res,next)=>{
    try{
        const restaurantDetail=req.body;
        const user=req.user;
        if(!user.isAdmin){
            return res.status(400).json({success:false,message:"You are not admin"});
        }
        let restaurant=await Restaurant.findOne({name:restaurantDetail.name});
        if(restaurant){
            return res.status(300).json({success:false,message:"restaurant already exist"});
        }else{
            restaurant=await Restaurant.create({
                name:restaurantDetail.name,
                imageUrl:restaurantDetail.imageUrl,
                description:restaurantDetail.description,
                email:restaurantDetail.email,
                mobile:restaurantDetail.mobile,
                pincode:restaurantDetail.pincode,
                city:restaurantDetail.city,
                state:restaurantDetaill.state,
                locality:restaurantDetail.locality,
                country:restaurantDetail.country,
            })
            return res.status(200).json({success:true,message:restaurant});
        }
    }catch(err){
        console.log(err);
        res.status(500).json({success:false,error:err});
    }
}



/*
    description: this api returns all the restaurants available 
    request: {};
    params: {};
    response: {success , restaurants};
    createdBy : Ashutosh Mishra
*/

exports.getRestaurant=async (req,res,next)=>{
    try{
        const restaurants=Restaurant.findAll({
            attributes:['id','name','city','locality','country','mobile',],
            include:{model:'reviews',}
        });
        return res.status(200).json({success:true,message:restaurants});
    }catch(err){
        console.log(err);
        return res.status(500).json({success:false,message:err});
    }
}


/*
    description: this api update the restaurant detail as per the request body
    request: {any fiels which are to be updated in a single object};
    params: {restaurantId};
    response: {success ,updated restaurant};
    createdBy : Ashutosh Mishra
*/
exports.updateRestaurant= async (req,res,next)=>{
    try{
        const restaurantId=req.params.id;
        const restaurant=await Restaurant.updateOne({id:restaurantId},{...req.body,updatedBy:req.user.id});
        if(restaurant){
            return res.status(200).json({success:true,message:restaurant});
        }else{
            return res.status(400).json({success:false,message:"Restaurant not found"});
        }
    }catch(err){
        console.log(err);
        res.status(500).json({success:false,error:err});
    }
}


/*
    description: this api delete the restaurant detail if needed
    request: {};
    params: {restaurantId};
    response: {success ,message};
    createdBy : Ashutosh Mishra
*/
exports.removeRestaurant=async (req,res,next)=>{
    try{
        const restaurantId=req.params.id;
        await Restaurant.deleteOne({id:restaurantId});
        res.status(200).json({success:true,message:"deleted successfully"});
    }catch(err){
        console.log(err);
        res.status(500).json({success:false,error:err});
    }
}