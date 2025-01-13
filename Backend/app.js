const express = require("express");
const app = express();
const user = require("./controller/user");

app.use("/api/v2/user",user);

if(process.env.NODE_ENV !== 'PRODUCTION') {
    require('dotenv').config({
        path:"Backend/config/.env",
    });

};

app.get('/',(req,res) =>{
    return res.send('Welcome to backend');
});

module.exports = app;