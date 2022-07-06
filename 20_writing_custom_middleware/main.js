const express = require("express");   // express require in main file
const app = express();               //all methods come in app
const port =3000;
// console.log(app);

// app.use(express.static('public'));

const mymiddleware = require("./my-middleware.js");

app.use(mymiddleware({ option1: '1', option2: '2' }));

app.use('/static', express.static('public'));

var validation = function(req,res,next){
    console.log("MiddleWare Accessed.");
    next();
};

var uservalidation = function(req,res,next){
    if(req.params.username == 'Arjun'){
    console.log("User Authenticated.");
    }
    else{
        console.log("User not Authorised.");
    }
    next();

};

//app.use(validation);

app.get("/",validation,(req,res)=>{
    res.send(" Welcome To the Course.");
});

app.get("/Users",uservalidation,(req,res)=>{
    res.send(" User Profile.");
});

app.get("/Users/:username",uservalidation,(req,res)=>{
    res.send(" User Profile.");
});

app.listen(port,()=>{console.log(` Server running on port : ${port} `)});