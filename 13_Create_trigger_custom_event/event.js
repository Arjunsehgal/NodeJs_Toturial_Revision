// create a trigger custom event in node js

const events = require("events");                // we hace a predefined eents in NOddejs
const event = new events.EventEmitter();         // first create a object of that event

event.on('click',()=>{console.log("First Event Created")});    // now it is triggered on object event when clicked.

event.emit('click');    // Now this event is triggered or emmit.





const event1 = new events.EventEmitter();         // first create a object of that event

event1.on('click',(n1)=>console.log(n1));    // now it is triggered on object event when clicked.
event1.emit('click','Welcome To Node.Js Series');


const event2 = new events.EventEmitter();         // first create a object of that event

event2.on('click',(n1,n2)=>console.log(n1+n2));    // now it is triggered on object event when clicked.

event2.emit('click',400,500);
