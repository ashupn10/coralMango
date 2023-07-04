const Review=require('../models/review');



/*
    description: this api will add review of users in review table
    request: {rating,reviewDescription,}
    params: {restaurant id}
    response: return the created review
    createdBy : Ashutosh Mishra
*/ 
exports.addReview= async (req,res,next)=>{
    try{
        const userId=req.user.id;
        const restaurantId=req.params.restaurantId;
        const textReview=req.body.description;
        const rating=req.body.rating;
        const review=await Review.create({
            userId:userId,
            restaurantId:restaurantId,
            rating:rating,
            textReview:textReview,
        })
        return res.status(200).json({success:true,message:review});
    }catch(err){
        console.log(err);
        res.status(500).json({success:false,message:err});
    }
}


/*

    description: This api will get all the review of any restaurant and return
    request: {}
    params: restaurantId
    response: review of restaurant in json format
    createdBy : Ashutosh Mishra
*/
exports.getReviews=async (req,res,next)=>{
    try{
        const reviews=Review.findAll({restaurantId:req.params.restaurantId});
        res.status(200).json({success:true,message:reviews})
    }catch(err){
        console.log(err);
        res.status(500).json({success:false,message:err})
    }
}

/*
    description: this api will remove any specific review which is not needed
    request: {}
    params: {reviewId}
    response : {message,success}
    createdBy : Ashutosh Mishra
*/
exports.removeReview=async (req,res,next)=>{
    try{
        const reviewId=req.params.id;
        await Review.deleteOne({id:reviewId});
        res.status(200).json({success:true,message:"deleted successfully"});
    }catch(err){
        console.log(err);
        res.status(500).json({success:false,message:err})
    }
}