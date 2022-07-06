// const express = require("express");   // express require in main file
// const app = express();               //all methods come in app

// var bodyParser = require('body-parser');
// const {body, validationResult} = require('express-validator');


// const port =3000;
// // console.log(app);

// // app.use(express.static('public'));

// app.use('/static', express.static('public'));
// app.set('view engine', 'twig');
// app.set('views','./public/views/');

// // parse application/x-www-form-urlencoded
// var urlencodedParser= app.use(bodyParser.urlencoded({ extended: false }));

// // parse application/json
// var jsonParser= app.use(bodyParser.json());

// app.get('/',(req,res)=>{

//     res.render('index',{title:"Login form",message:"Enter Your Login Credentials."});
// });

// app.post('/login',urlencodedParser, (req,res)=>{
//     res.render('welcome',req.body.username);
// });

// app.post('/',urlencodedParser,[
//     body('username','Username should be email.').isEmail(),
//     body('password','Password must a minimum length of 5').isLength({min:5})

// ],(req,res)=>{   //....................IN POST WE HAVE TO USE BODY PARSER TO FETCH THE DETAILS..............
//     const errors = validationResult(req);
//     console.log(errors.mapped());
//     console.log(req.body);
//     res.render('index',{title:'User Details',error: errors.mapped()});      // {title:"User Details",username: req.body.username, password: req.body.password}
// });

// // app.get('/about/:a-:b',(req,res)=>{

// //     res.render('about',{title:"About", sum: parseInt(req.params.a) + parseInt(req.params.b),
// //     sub: parseInt(req.params.a) - parseInt(req.params.b),mul: parseInt(req.params.a) * parseInt(req.params.b)});
// // });



// app.listen(port,()=>{console.log(` Server running on port : ${port} `)});



const express = require("express");
const bodyParser=require('body-parser')
const { matchedData, validationResult, check } = require('express-validator');
//const { matchedData ,sanitizeBody } = require('express-validator/filter');

const app = express();
app.use(express.static('public'));
app.set('view engine','twig');
app.set('views','./public/views');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var urlEncodedParser = bodyParser.urlencoded({ extended: false});


app.get("/",(req,res)=>{
    res.render('index',{title:"template engine of ejs",message:"enter username and password"});
});

app.post('/login',urlEncodedParser, function (req,res){
    res.send('welcome',req.body.username);
 });

app.post('/',urlEncodedParser,[
    check('username','enter username again').isEmail(),
    check('password','min 5 character').isLength({min:5}),
    check('cpassword').custom((value,{req})=>{
        if(value !== req.body.password){
            throw new Error('Confirmation Password does not match Password');
        }
        return true;
    }),
    

],(req,res)=>{
    const error=validationResult(req);
    console.log(error.mapped());
    if (!error.isEmpty()){
        const user = matchedData(req);
        res.render('index',{title:"user details",error:error.mapped(),user:user});
    }else{
        const user = matchedData(req);
        console.log(user);               // previously it is called sanitisation

        res.render('login',{title:"User Details",user:user});
    }
    
});

app.listen(3000,()=>console.log("server running on 3000"));