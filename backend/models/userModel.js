const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const { applyTimestamps } = require('./roomModel')
const Schema = mongoose.Schema



const userSchema = new Schema({
    name:{
        type: String,
        required: [true, 'Please Enter your name']
    },
    email: {
        type: String,
        required: [true, 'Please Enter your Email'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Please add a password'],
    },
      role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  }
}, {
  timestamps: true, 
});


// Now For Password Hash

userSchema.pre('save',async function(next){
    if(!this.isModified('password'))
        return next();
    const salt = await bcrypt.genSalt(12);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});


// For the validation of password
userSchema.methods.matchPassword = async function(password){
    return await bcrypt.compare(password, this.password)
};

const User = mongoose.model('User',userSchema);
module.exports = User