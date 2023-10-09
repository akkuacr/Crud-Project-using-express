require('dotenv').config();
const express = require('express');
const cors = require("cors");
const  userRoutes = require('./routes/userRoutes.js'); 




const connectToDb =require('./config/db.js')
const app = express();

//Express middlewares

app.use(express.json())
//mtlb agr get request k through ayi tb usse use kre 
app.use(express.urlencoded({extended:true}))

app.use(cors())




//init connection to db
connectToDb()

app.use('/',userRoutes)
 


 




//ye tb use krenge jb aap import use na krre ho

module.exports =app;