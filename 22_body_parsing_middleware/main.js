const express = require("express");   // express require in main file
const app = express();               //all methods come in app
var bodyParser = require('body-parser');
const port =3000;
// console.log(app);

// app.use(express.static('public'));

app.use('/static', express.static('public'));
app.set('view engine', 'twig');
app.set('views','./public/views/');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get('/',(req,res)=>{

    res.render('index',{title:"Login form",message:"Enter Your Login Credentials."});
});

app.post('/',(req,res)=>{   //....................IN POST WE HAVE TO USE BODY PARSER TO FGETCH THE DETAILS..............

    res.render('login',{title:"User Details",username: req.body.username, password: req.body.password});
});

app.get('/about/:a-:b',(req,res)=>{

    res.render('about',{title:"About", sum: parseInt(req.params.a) + parseInt(req.params.b),
    sub: parseInt(req.params.a) - parseInt(req.params.b),mul: parseInt(req.params.a) * parseInt(req.params.b)});
});



app.listen(port,()=>{console.log(` Server running on port : ${port} `)});