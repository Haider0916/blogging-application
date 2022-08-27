const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db')
const morgan = require('morgan');
const cors = require('cors');
const app = express();

//importing the routes index file
const routes = require('./routes');

//Loading the config file 
dotenv.config({path: './config/config.env'});

app.use(cors());

//calling the database connection file to connect to the db
connectDB();

//logging only for the dev part of things
if(process.env.NODE_ENV === "development"){
    app.use(morgan('dev'))
}

//parsing the body
app.use(express.json())

// handling all the routes
app.use(routes);

const PORT = process.env.PORT || 8000;

app.listen(
    PORT,
    console.log(`The backend is running on port ${PORT}`)
)


