//3rd party packages
require('dotenv').config({path:"./src/config/.env"})
require('express-async-errors')
const express = require('express')

//imports
const connectDB = require("./src/config/db");
const notFound = require('./src/middleware/not-found');
const errorHandler = require('./src/middleware/error-handler');
const catsRoute = require('./src/api/cats')


const app = express();
//middleware


//routes
app.use('/api/v1/cats',catsRoute)


app.use(notFound)
app.use(errorHandler)




const start = async ()=>{
    const port = process.env.PORT || 4000;
    try {
        await connectDB()
        app.listen(port,()=>console.log(`server is on ${port}`))
    } catch (error) {
        console.log(error)
        
    }
}
start();