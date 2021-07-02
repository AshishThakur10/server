const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/create_user', function(req,res){
    try{
        const myuser = new User(req.body);
         myuser.save();
        res.send(myuser);
    }catch (err) {
        res.send();
    }
});

router.get('/all_user',(req,res)=>{
    User.find()
   .populate("postedBy","_id name")
   .then(user =>{
        res.json({user})
   })
   .catch(err=>{
       console.log(err)
   })
   })


module.exports = router;