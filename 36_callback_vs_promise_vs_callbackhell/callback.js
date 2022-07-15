// Simple functions
// console.log('simple function is calling');
// function show(){
//     console.log('Show Function Is Calling.');
// }

// function display(){
//     console.log('Display Function Is Calling.');
// }

// show();
// display();

// CallBack function 
console.log('Callback function is Working');
function show(){
    console.log('Show Function Is Calling.');
}

function display(callback){
    console.log('Display Function Is Calling.');
    callback();
}

display(show);

function calculate(x){
    return (x+5);
}

function display(callback){
    return callback(4);
}

console.log('The result is : '+display(calculate));


