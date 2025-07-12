const mongoose = require('mongoose')



async function connectToDatabase(){
    try{
        connection = await mongoose.connect(process.env.MONGODB_URI)
    console.log("Database Connected Sucessfully")
    }catch(err){
        console.error(err)
    }
}

module.exports = connectToDatabase