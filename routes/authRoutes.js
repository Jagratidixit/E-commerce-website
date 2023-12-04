const express =  require('express');
const User = require('../models/User');
const passport=require('passport');
const router=express.Router();

//signup
router.get('/register',(req,res)=>{
    res.render('auth/signup')
})

//signup ke liye
router.post('/register',async(req,res)=>{
    let {username,email,password}=req.body;//jo signup form mein bhara vo fetch kar liya

    let newuser =new User({username,email});//password to req.body se aa gaya but register mein newuser (username+email)nhi h to combbine kiya by making new constructor.
    let nayabanda=await User.register(newuser,password)//static method jo schema mein lagta h therefore require user
    res.send(nayabanda);
})

//login ke liye
router.post('/login',
    passport.authenticate('local',
    {
        failureRedirect:'./login'}),

        function(req,res){
            res.redirect('./products')
        })


//route for login
router.get('/login',(req,res)=>{
    res.render('auth/login')
})


module.exports=router;