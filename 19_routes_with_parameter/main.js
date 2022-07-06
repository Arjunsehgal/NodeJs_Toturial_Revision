const express = require("express");   // express require in main file
const app = express();               //all methods come in app
const port =3000;
// console.log(app);

// app.use(express.static('public'));

app.use('/static', express.static('public'))

app.get("/",(req,res)=>{
    res.sendFile(__dirname + '/index.html');

});

// app.get("/Users/:Id",(req,res)=>{
//     console.log(req.params);
//     res.send("User data Accessed !"+ " " + req.params.Id);

// });

app.get("/Users/:Id?",(req,res)=>{
    console.log(req.params);
    if(req.params.Id == undefined)
    res.send("All user Data Accessed .");
    else 
    res.send("User data Accessed !"+ " " + req.params.Id);

});

app.get("/Users/:Id/book/:BookId",(req,res)=>{
    console.log(req.params);
    res.send("User data Accessed :"+ " " + req.params.Id +"BookId :"+ req.params.BookId);

});

// app.get("/flights/",(req,res)=>{
//     console.log(req.params);
//     res.send("Search for Flights.");

// });

app.get("/flights/:From?-:To?",(req,res)=>{
    console.log(req.params);
    res.send("Search for Flights:"+ "From: " + req.params.From + "To: "+ req.params.To);

});
app.get("/flights/:From?.:To?",(req,res)=>{
    console.log(req.params);
    res.send("Search for Flights:"+ "From: " + req.params.From + "To: "+ req.params.To);

});

app.get("/ab?cd",(req,res)=>{
    res.send("Welcome To The Course.");
});

app.get("/ab+cd",(req,res)=>{
    res.send("Welcome To The Course.");
});

app.get("/ab*cd",(req,res)=>{
    console.log(req.params);
    res.send("Welcome To The Course."+ req.params[0]);
});

app.get(/.*fly$/, (req, res) => {
    res.send('/.*fly$/')
  }) ;


app.get("/Users/Profile",(req,res)=>{
    res.send("User profile data  Accessed !");

});

app.listen(port,()=>{console.log(` Server running on port : ${port} `)});