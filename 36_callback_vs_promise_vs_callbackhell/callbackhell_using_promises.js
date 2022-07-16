// function display(){
//     setTimeout(function show(){
//         console.log("Show Function is Calling.");
//     },5000);
//     console.log('Display Function Is Calling');
// };

// display();

// function display(callback){
//     console.log('Dispaly Function IS Calling.');
//     callback();
// }

// display(function(show){
//     console.log('Show Function Is Calling.');
// });


//  Anonmous Function
// function display(callback){
//     console.log('Dispaly Function IS Calling.');
//     callback();
// }

// display(function(){
//     console.log('Show Function Is Calling.');
// });


// ...................................................CALLBACK HELL.........................................................

// addition(2,function(addRes,err){
//     if(!err){
//          Subtract(addRes,function(subRes,err){
//           if(!err){
//             multiplication(subRes,function(mulRes,err){
//                 console.log('Result : '+mulRes);
                
//                }); 
//             }
//          });
//     }
// });
 
// function addition(val,callback){
//   callback(val+5,false);
// }
// function Subtract(val,callback){
//     callback(val-3,false);
//   }
//   function multiplication(val,callback){
//     callback(val*5,false);
//   }
 

// ..........................................HANDELLING CALLBACKHELL USING PROMISES...........................................


var promise = new Promise(function(resolve,reject){
    resolve(2);
  });
 
  promise.then(addition)
  .then(Subtract)
  .then(multiplication)
  .then(function(msg){
    console.log('output: '+msg );
  }).catch(function(err){
    console.log(err);
  });
 

  function addition(val){
    return (val+5);
  }
 
  function Subtract(val){
    return (val-3);
  }
  function multiplication(val){
    return (val*5);
  }
