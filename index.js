const express = require('express');
const app = express();

//  load config from env file
require("dotenv").config();
const PORT = process.env.PORT;

// use middleware
// dataparse karenge without any parser error throw 
// use middleware to parser json request body
app.use(express.json());
// routes ko map karna hai
// import routes for todo api
// const todoRoutes = require('./routes/todo');
const USER  = require('./routes/User');
// ab saare ke saare routes ko mount karna hai
// mount todo api routes
// app.use('/api/v1',todoRoutes);

app.use('/api/v1',USER);
app.listen(PORT,() => {
    console.log(`server started at port no. ${PORT}`);
});
// connect to the db
const dbConnect= require("./config/database");
dbConnect;

app.get('/',(req,res) =>{
    res.send(`<h1>this  is homepage</h1>`);
})