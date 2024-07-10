const express = require ( 'express' );
const app = express();

// Import the events module
const EventEmitter = require('events');
// Create an instance of the EventEmitter class
const event = new EventEmitter();

let count = 1;

event.on(`Api called`,()=>{
   console.log(`Event Called---->${count}`);
   count++;
})

app.get('/',(req,res)=>{
    res.send(`home api`)
    event.emit(`Api called`)
})
app.get('/about',(req,res)=>{
    res.send(`about api`)
    event.emit(`Api called`)
})
app.get('/tera',(req,res)=>{
    res.send(`tera api`)
    event.emit(`Api called`)
})
app.get('/mera',(req,res)=>{
    res.send(`mera api`)
    event.emit(`Api called`)
})

app.listen(5000)