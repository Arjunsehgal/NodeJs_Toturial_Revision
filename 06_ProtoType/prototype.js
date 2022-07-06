//  In nodeJS prototype is used in terms of inheriteance in javascript

// var student = function(){
//     this.name = "Arjun Sehgal";
//     this.age = 22;
//     this.email = "arjun.sehgal@somaiya.edu"
// }

// var stud = new student();

// console.log(stud);
// console.log(stud.name);
// console.log(stud.age);

//..................................................................................

var student = function(){                ///or/// function student(){}
    this.name = "Arjun Sehgal";
    this.age = 22;
    this.email = "arjun.sehgal@somaiya.edu"
}

student.prototype={
    address:"Jammu",
    getName:function(){
        return this.name;
    }
}

var stud = new student();

// console.log(stud);
// console.log(stud.name);
// console.log(stud.age);

console.log(stud.address);
console.log(stud.getName());




