var express = require('express');
var empModel = require("../modules/employee");
var router = express.Router();




/* GET home page. */                                  // displaying records on HTML Pages
router.get('/', function(req, res, next) {
  var employee = empModel.find({});
  employee.exec(function(err,data){
    if(err) throw err;
    res.render('index', { title: 'Employee Records', records: data});
  });
  
});

router.post('/',function(req,res){

  var empDetails = new empModel({
    name:req.body.uname,
    email:req.body.email,
    etype:req.body.emptype,
    hourlyrate:parseInt(req.body.hrlyrate),
    totalHour:parseInt(req.body.ttlhr),
    total: parseInt(req.body.hrlyrate) * parseInt(req.body.ttlhr),
  });

  console.log(empDetails);
  // empDetails.save();

  // employee.exec(function(err,data){
  //   if(err) throw err;
  //   res.render('index', { title: 'Employee Records', records: data});
  // });

  empDetails.save(function(err,req1){
    if(err) throw err;
    
    var employee = empModel.find({}).clone();            
    employee.exec(function(err,data){            // 
      if(err) throw err;
      res.render('index', { title: 'Employee Records', records: data,success:'Record Inserted Successfully' });           // either use redirecrt or render      
      //res.redirect("/");
        });
    });

});


router.post('/search/',function(req,res){


  var fltrName = req.body.fltrname;
  var fltrEmail = req.body.fltremail;
  var fltremptype = req.body.fltremptype;
  
  if(fltrName !='' && fltrEmail !='' && fltremptype !=''){
  var filterParameter = { $and:[{name:fltrName},
  {$and:[{email:fltrEmail},{etype:fltremptype}]}
  ]
  }}
  else if(fltrName !='' && fltrEmail =='' && fltremptype !=''){
    var filterParameter = { $and:[{name:fltrName},              // or we use :  
      {$or:[{email:fltrEmail},{etype:fltremptype}]}              // var filterParameter = { $and:[{name:fltrName},{etype:fltremptype}]}}
      ]
      }}
      else if(fltrName =='' && fltrEmail !='' && fltremptype !=''){
        var filterParameter = { $and:[{email:fltrEmail},{etype:fltremptype}]}
      }
      else if(fltrName =='' && fltrEmail =='' && fltremptype !=''){
        var filterParameter = {etype:fltremptype}
      }
      else{
        var filterParameter = {};
      }
  
    
    var employeeFilter = empModel.find(filterParameter);            
    employeeFilter.exec(function(err,data){            // 
      if(err) throw err;
      res.render('index', { title: 'Employee Records', records: data,success:'Record Inserted Successfully' });           // either use redirecrt or render      
      //res.redirect("/");
        });
    });

module.exports = router;
