const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db')

//Loading the config file 
dotenv.config({path: './config/config.env'});

//calling the database connection file to connect to the db
connectDB();

const app = express();

//logging only for the dev part of things
if(process.env.NODE_ENV === "development"){
    app.use(morgan('dev'))
}

const PORT = process.env.PORT || 8000

app.get('/',(req,res)=>{
    console.log(req.hostname)
    return res.send('<h1>Hello how are you</h1>')
})

app.listen(
    PORT,
    console.log(`The backend is running on port ${PORT}`)
)


