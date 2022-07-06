// const express = require("express");   // express require in main file
// const app = express();               //all methods come in app

// // console.log(app);

// app.get("/",(req,res)=>{
//     res.send("Hello World !");

// });

// app.listen(3000,()=>{console.log("Server running on port : 3000")});


//  ..................................................... OR....................................

const express = require("express");   // express require in main file
const app = express();               //all methods come in app
const port =3000;
// console.log(app);

app.get("/",(req,res)=>{
    res.send("Hello World !");

});

app.get("/Users",(req,res)=>{
    res.send("User data Accessed !");

});

app.listen(port,()=>{console.log(` Server running on port : ${port} `)});