const mongoose = require('mongoose')
const Schema = mongoose.Schema


const roomSchema = new Schema({
    title:{
        type : String
    },
    description:{
        type : String
    },
    roomNo:{
        type : Number
    },
    blockNo:{
        type : String
    },
    imageUrl:{
        type : String
    },
})

const Room = mongoose.model('Room',roomSchema)
module.exports = Room