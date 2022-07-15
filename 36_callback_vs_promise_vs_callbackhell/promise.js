// var promise = new Promise(function(resolve,reject){
//     reject('Rejected!');
// });
// promise.then(function(msg){
//     console.log(msg);
// },
// function(err){
//     console.log(err);
// }
// )


// var data = true;
// var promise = new Promise(function(resolve,reject){
//     if(data){
//         resolve('Resolved!');
//     }else{
//     reject('Rejected!');
// }
// });
// promise.then(function(msg){
//     console.log(msg);
// },
// function(err){
//     console.log(err);
// }
// )



var data = true;
var promise = new Promise(function(resolve,reject){
    if(data){
        resolve('Resolved!');
    }else{
    reject('Rejected!');
}
});
promise.then(function(result) {
    console.log(result); 
  }).catch(function(err) {
    console.log(err); 
  });