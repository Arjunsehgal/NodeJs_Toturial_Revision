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
    this.hourlyrate * this.totalHour;
    

}



//    modelName                     TableName/    schemaName
//                                  collection
var employeeModel = mongoose.model('Employee', employeeSchema);

// object                 in Json Format
var employees = new employeeModel({
    name:'Arjun Sehgal',
    email:'arjunsehgal00@gmail.com',
    etype: 'hourly',
    hourlyrate: '10',
    totalHour: '130',
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
    employees.save(function(err,res){
        if(err) throw error;
        console.log(res);
        conn.close();
    });
});