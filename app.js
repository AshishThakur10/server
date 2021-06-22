const express = require('express');
const app = express ();    // Init express 

app.get('/',function(req,res){
    res.send('home page welcome to the server');
})

app.get('/1',function(req,res){
    res.send('welcome to the room no. 1')
})

app.get("/2",function(req,res){
    res.send('leardary ashish lal welcome to your room no.2')
})

app.listen(3000,() => console.log('listening at 3000'));     //Listen on a port 
