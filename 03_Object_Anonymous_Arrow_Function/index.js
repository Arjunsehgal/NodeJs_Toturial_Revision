
//1. Object Making......................

var users = {name: "Arjun Sehgal",age: "22",RollNo: "1811041",email: "arjun.sehgal@somaiya.edu",college:"KJSCE"}

//console.log(users)

// If We Want to Print It One By One .........

// console.log(users.name)

// 2. Anonomous Functions..................................

// var Person = function(){
//     console.log("This Is an Anonomous Function .")
// }

// Person();


// var Person_1= function(a,b){
//     var c =a+b;
//     console.log("Addition of a and b ="+c)
// }

// Person_1(100,900);

//3. Arrow Function..........................................

// var Person_2 = ()=>console.log("This Is an Arrow Function .")

// Person_2();


var Person_3 = (a)=>console.log("This Is an Arrow Function with parameter a ="+a)


Person_3(5);