const express = require("express");   // express require in main file
const app = express();               //all methods come in app
const port =3000;
// console.log(app);

// app.use(express.static('public'));

app.use('/static', express.static('public'));
app.set('view engine', 'twig');
app.set('views','./public/views/');

app.get('/',(req,res)=>{

    res.render('index',{title:"Totourial Website",message:"Hello World."});
});



app.listen(port,()=>{console.log(` Server running on port : ${port} `)});