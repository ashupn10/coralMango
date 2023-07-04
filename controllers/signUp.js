const bcrypt =require('bcrypt');
const User=require('../models/user');



// it is a function used in postSignUp api.
async function createUser(user,res){
    const olduser=await User.findOne({where:{
        email:user.email
    }})
    if(!olduser){
        const result=await User.create({
            name:user.name,
            email:user.email,
            password:user.password,
            mobile:user.mobile,
            city:user.city,
            country:user.country,
            locality:user.locality,
            isAdmin:user.isAdmin,
        })
        res.status(200).json({success:true,message:'User created successfully'});
    }else if(olduser){
        res.status(500).json({success:false,message:'User Already exist'})
    }else{
        res.status(500).json({success:false,message:'Something went wrong'})
    }
}



/*
    description: this api creates the user and stores the user in database
    request: {name,email,password,email,mobile,pincode,city,state,locality,country};
    params: {}
    response:return the added user
    createdBy : Ashutosh Mishra
*/
exports.postSignUp=async (req,res,next)=>{
    try{
        const body=req.body;
        bcrypt.hash(body.password,10,function(err,hash){
            if(err){
                throw new Error(err);
            }else{
                body.password=hash;
                return createUser(body,res);
            }
        })
        
    }catch(err){
        throw new Error(err);
    }
}