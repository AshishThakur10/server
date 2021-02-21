const express = require('express');

const app = express ();    // Init express 


app.listen(3000, () => console.log('listening at 3000'));      //Listen on a port 

app.use(express.static('public'));


//endpoints/ route handlers
app.get('/',function(req,res)  {
res.send('Hello World ');
});


