var mongoose = require('mongoose');
var employeeSchema = new mongoose.Schema({
    name: String,
    email: String,
    etype: String,
    hourlyrate: Number,
    totalHour: Number,
});
employeeSchema.methods.totalSalary = function(){
    console.log("Total Income Of Employee Rs." + this.hourlyrate * this.totalHour);
    console.log("Total Income Of %s Rs. %d" ,this.name, this.hourlyrate * this.totalHour);

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

employees.totalSalary();