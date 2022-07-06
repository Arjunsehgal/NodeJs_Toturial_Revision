var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/employee');

var conn = mongoose.connection;

var employeeSchema = new mongoose.Schema({
    name: String,
    email: String,
    etype: String,
    hourlyrate: Number,
    totalHour: Number,
    total: Number,
});
employeeSchema.methods.totalSalary = function(){
    return this.hourlyrate * this.totalHour;
    

}



//    modelName                     TableName/    schemaName
//                                  collection
var employeeModel = mongoose.model('Employee', employeeSchema);

// object                 in Json Format
var employees = new employeeModel({
    name:'sehgal bhai',
    email:'arjunsehga00@gmail.com',
    etype: 'part-time',
    hourlyrate: '5',
    totalHour: '40',
});

// console.log(employees);
// console.log("Total Income Of Employee :" + employees.hourlyrate * employees.totalHour)

employees.total = employees.totalSalary();


conn.on("connected",function(){
    console.log("successfuylly connected.");
});
conn.on("disconnected",function(){
    console.log("successfuylly disconnected.");
});

conn.on('error',console.error.bind(console,'connection error :'));
conn.once('open',function(){
    // employees.save(function(err,res){                        // for creating a table in database
    //     if(err) throw error;                         
    //     console.log(res);
    //     conn.close();
    // });


    //  employeeModel.find({},function(err,data){                 // for displaying data from database
    //     if(err) throw error;
    //     console.log(data);
    //     conn.close();
    //  }) ;     
    
    // employeeModel.findOneAndUpdate({totalHour:130},{totalHour:190},function(err,data){                 // for displaying and updating data from database
    //     if(err) throw error;
    //     console.log(data);
    //     conn.close();
    //  }) ;   


    employeeModel.findOneAndRemove({totalHour:190},function(err,data){                 // for deleting data from database
        if(err) throw error;
        console.log(data);
        conn.close();
     }) ;

});