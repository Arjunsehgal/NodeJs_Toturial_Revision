

// ECMAScript or ES6
// let, const, templating string, class

// problem with Var

// var a =30;
// var a =60;

// console.log(a); //it does not give any error and prints the results of last value

// similarly if we Try LET................................

let a =30;
//let a =40;

console.log(a);   // now this time it gives an error see pic 2



let b =30;
function abc(){
    let b =60;
    console.log(b);
}

console.log(b);   // now this time it gives an error see pic 2
abc();

// 2. ............................................. constant ...........................................

// const a = 30  we can create a single const variable 

const c ={
    "name": "Arjun",
    "age": 22,
}
c.email= "arjun.sehgal@somaiya.edu";
c.age = 30;   // we can change the value of constant if the constant is in in object form 

console.log(c);



// 3. ....................................Templating String............................................

var name = "Arjun";
var age = 22;

console.log("Hi %s you are %s year old",name,age)
console.log("Hi "+name+" you are "+age+" year old")


console.log(`Hi ${name} you are ${age} year old . This is with the  use of templating string`)





// 4. ....................................Class.....................................................




class Users{
    constructor(){
        this.name = "Arjun";
        this.age = 28;
    }
    getName(){
        this.email= "arjun.sehgal@somaiya.edu";
        return this.name;
    }
    getAge(){
        return this.age;
    }
    getEmail(){
        return this.email;
    }
}

var user = new Users();
console.log(user.getName());
console.log(user.getEmail());  // this will only work when name function is called 



class Persons{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    getName(){
        this.email= "arjun.sehgal@somaiya.edu";
        return this.name;
    }
    getAge(){
        return this.age;
    }
    getEmail(){
        return this.email;
    }
}

var person = new Persons("ArjunSehgal",22);
console.log(user.getName());
console.log(user.getEmail());