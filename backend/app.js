require('dotenv').config()

const express = require('express');
const connectToDatabase = require('./database');
const app = express();
const cors = require('cors')




//Middlewares
app.use(cors());
app.use(express.json())

//Connect to mongoDB
connectToDatabase();


//Routes
app.use('/api/auth', require('./routes/authRoutes'))

app.get('/',(req, res)=>{
    res.json({
        message : "The Hotel Api is Running"
    })
})


app.listen(3000,()=>{
    console.log("Nodejs Project has started at port 3000")
})
