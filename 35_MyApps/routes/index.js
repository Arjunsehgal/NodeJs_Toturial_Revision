var express = require('express');
var multer= require('multer');
var path = require ('path');
var empModel = require("../modules/employee");
var uploadModel = require("../modules/upload");
var router = express.Router();

router.use(express.static(__dirname+"./public/"));

var Storage = multer.diskStorage({
  destination:"./public/uploads/",
  filename:(req,file,cb)=>{
    cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname));
  }
});

var upload = multer({
  storage:Storage
}).single('file');

/* GET home page. */                                  // displaying records on HTML Pages

router.post('/upload', upload,function(req, res, next) {
  var imageFile = req.file.filename;
  var success = req.file.filename+ "Uploaded Successfully";

  var imageDetails = new uploadModel({
    imagename: imageFile,
  });

  imageDetails.save(function(err,req2){
  if(err) throw err;
  var imageData = uploadModel.find({});
  imageData.exec(function(err,data){
  if(err) throw err;
  res.render('upload-file', { title: 'Uploading-File', records:data, success:success});
  });
});

});

router.get('/upload', function(req, res, next) {

  var imageData = uploadModel.find({});
  imageData.exec(function(err,data){
  if(err) throw err;
  res.render('upload-file', { title: 'Uploading-File', records:data, success:''});
  });
});
  

router.get('/', function(req, res, next) {
  var employee = empModel.find({});
  employee.exec(function(err,data){
    if(err) throw err;
    res.render('index', { title: 'Employee Records', records: data,success:''});
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
    var employee = empModel.find({});            
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

router.get('/delete/:id', function(req, res, next) {
  var id = req.params.id;
  
  var del= empModel.findByIdAndDelete(id);
  // del.exec(function(err,data){
  //   if(err) throw err;
  //     res.render('index', { title: 'Employee Records', records: data});
  //   });     

    // ........OR ..............

    del.exec(function(err){
      if(err) throw err;
        // res.redirect("/");
        var employee = empModel.find({});
        employee.exec(function(err,data){            // 
          if(err) throw err;
          res.render('index', { title: 'Employee Records', records: data,success:'Record Deleted Successfully' });    
            });
      }); 

});


router.get('/edit/:id', function(req, res, next) {
  var id = req.params.id;
  var edit = empModel.findById(id);

  edit.exec(function(err,data){
    if(err) throw err;
    res.render('edit', { title: 'Edit Employee Record', records: data});
  });
  
});

router.post('/update/', function(req, res, next) {
  
  var update = empModel.findByIdAndUpdate(req.body.id,{
    name:req.body.uname,
    email:req.body.email,
    etype:req.body.emptype,
    hourlyrate:parseInt(req.body.hrlyrate),
    totalHour:parseInt(req.body.ttlhr),
    total: parseInt(req.body.hrlyrate) * parseInt(req.body.ttlhr),
  });

  update.exec(function(err,data){
    if(err) throw err;
    // res.redirect("/");
    var employee = empModel.find({});            
    employee.exec(function(err,data){            // 
      if(err) throw err;
      res.render('index', { title: 'Employee Records', records: data,success:'Record Updated Successfully' });    
        });
  });
  
});


    

module.exports = router;
