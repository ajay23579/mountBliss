const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const protect = async (req,resizeBy, next)=>{
    let token = req.header.authorization?.split(' ')[1];

    if (!token) return res.status(401).json({
        message: "You Are Not Authorized, no token"
    });
    try{
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findByID(decoded.id).select('-password');
        next();
    }catch(err){
        res.status(401),json({ message: "Invalid Token"})
    }
};

module.exports = {protect};