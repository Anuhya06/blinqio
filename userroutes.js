const express=require('express');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const {User}=require('../models');
const router=express.Router();
router.post('/register',async(req,res)=>{
    const {username,password}=req.body;
    try{
        const hashedPassword=await bcrypt.hash(password,10);
        const newUser=await User.create({username,password:hashedPassword});
        res.status(201).json(newUser);
    }catch(error)
    {
        res.status(500).json({error:error.message});
    }
});
router.post('/login',async(req,res)=>{
    const{username,password}=req.body;
    try{
        const user=await User.findOne({where:{username}});
        if(!user)return res.status(404).json({message:'User not found'});
        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch)return res.status(401).json({message:'Invalid Credentials'});
        const token =jwt.sign({id:user.id},process.env.JWT_SECRET,{expiresIn:'1h'});
        res.status(200).json({token});
    }catch(error)
    {
        res.status(500).json({error:error.message});
    }
});
module.exports=router;