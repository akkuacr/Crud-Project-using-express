
const User = require('../models/schema.js')



exports.home = (req,res)=>{
    res.send('Hello World!');
}
exports.createUser = async (req,res)=>{
    
    //extract info from frontend
    try{
        const {name,email} =req.body
        
        if(!name || !email){
           throw new Error("Name and email are required") 
        }

       const userExists= User.findOne({email})
       
       if(userExists){
        throw new Error("User already Exists")
       }

       const user= await User.create({
               name,email
        })
        res.status(201).json({
            sucess:true,
            message:"User created Succesfully",
            user
        })



    }catch(error){
        console.log(error);
        res.status(400).json({
            sucess:false,
            message:error.message,
        })



    }

}

exports.getUsers = async (req,res)=>{
     
    try{
        const users= await User.find({})
        res.status(200).json({
            sucess:true,
            message:"retrived sucessfully",
            users
        })

    }catch(error){
        console.log(error);
        res.status(400).json({
            sucess:false,
            message:error.message,
        })



    }




}

exports.editUser = async (req,res)=>{  
     
    try{
        const user=await User.findByIdAndUpdate(req.params.id,req.body);
        res.status(200).json({
            sucess:true,
            message:"User Updated"
        })
         

    }catch(error){
        console.log(error);
        res.status(400).json({
            sucess:false,
            message:error.message,
        })



    }




}


exports.deleteUser = async(req,res)=>{

    try{
        //url se agr data lena ho toh request ese krenge
       const userId = req.params.id 
       const user=await User. findByIdAndDelete(userId)
       res.status(200).json({
        sucess:true,
        message:"User deleted Sucessfully"

       })   
    }catch(error){
        console.log(error);
        res.status(400).json({
            sucess:false,
            message:error.message,
        })
    }

}