const express = require('express');
const mongoose = require('mongoose');
const app = express ();    // Init express 
let PORT = process.env.PORT || 4000



mongoose.connect('mongodb+srv://Ash1:Ash1@cluster0.pbef3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    {
      dbName: 'Database',
      useNewUrlParser : true,
      useUnifiedTopology: true
    
    })
    .then(()=> {
    console.log('Mongodb connected……');
    });












app.get('/',function(req,res){
    res.send('home page welcome to the server');
})

app.get('/1',function(req,res){
    res.send('welcome to the room no. 1')
})

app.get("/2",function(req,res){
    res.send('leardary ashish lal welcome to your room no.2')
})

app.listen(PORT,() => console.log('listening at 4000'));     //Listen on a port 
