const jwt = require('jsonwebtoken')
const User = require('../models/userModel')
require('dotenv').config()

//To create the JSON web token
const generateToken = (userId)=>{
    return jwt.sign(
        {id: userId}, //Payload
        process.env.JWT_SECRET, //Secret Key
        {expiresIn: '7d'} //Info of token
    ) //it returns the sign token
};

exports.registerUser = async (req,res)=>{
    try{
        const {name, email, password} = req.body;
        const userExists = await User.findOne({email})
        if (userExists)
            return res.status(400).json({
        message: "User already Exist",
        message: process.env.JWT_SECRET
    },
);
    const user = await User.create({name, email, password});
    res.status(201).json({
        message: "User is Registered Sucessfully",
        token: generateToken(user._id),
        user: {
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role
        }
    });
    }catch(error){
        console.error(error)
        res.status(500).json({message: "Error Registering user",
            error: error.message,
    })
    }
}


//Now for login user

exports.loginUser = async (req,res)=>{
    try{
        const {email, password} = req.body;
        const user = await User.findOne({email});
        if(!user || !(await user.matchPassword(password)))
            return res.status(401).json({message: "Check Email and password and try again"})
        res.status(200).json({
            message : "Login Sucessfully",
            token: generateToken(user._id),
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });
    }catch(error){
        res.status(500).json({
            message:"Error Logging in",
        })
    }
};
