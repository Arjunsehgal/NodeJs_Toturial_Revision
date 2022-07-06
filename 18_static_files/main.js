const express = require("express");   // express require in main file
const app = express();               //all methods come in app
const port =3000;
// console.log(app);

// app.use(express.static('public'));

app.use('/static', express.static('public'))

app.get("/",(req,res)=>{
    res.sendFile(__dirname + '/index.html');

});

app.get("/Users",(req,res)=>{
    res.send("User data Accessed !");

});

app.get("/Users/Profile",(req,res)=>{
    res.send("User profile data  Accessed !");

});

app.listen(port,()=>{console.log(` Server running on port : ${port} `)});