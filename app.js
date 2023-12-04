// //---------------------------1-------------------------------------------------
// const express=require('express');
// const app=express();
// const path=require('path');
// const mongoose = require('mongoose');
// const seedDB = require('./seed');
// const productRoutes =require('./routes/productRoutes');//app,js run use kaise pata ki prod
// const reviewRoutes =require('./routes/reviewRoutes');

// //---------------------------4------------------------------------------------
// mongoose.connect('mongodb://127.0.0.1:27017/baigan')//return promise
// .then(()=>{console.log("DB CONNECTED")})
// .catch((err)=>{console.log("error while connecting DB",err)})
// //----------------------------5---------------------------------------------------


//  //seedDB();//commented after 1 use taaki baar baar store na ho.







// //------------------------------2---------------------------------------------------------
// app.set('view engine','ejs');
// app.set('views',path.join(__dirname,'views'));
// app.use('/',express.static(path.join(__dirname,'public')));
// //---------------------------------------------------------------------------------------

// //--------------------6---------------------------
// //middleware for route
// app.use(productRoutes)

// app.use(reviewRoutes)



// //------------------------------3--------------------------------------------------------
// let PORT=8080;//variable for port
// app.listen(PORT,()=>{
//     console.log(`server connected at ${PORT}`)
// })




//---------------------------------------------------------------------------------------------
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const seedDB = require('./seed');
const productRoutes = require("./routes/productRoutes");
const methodOverride  = require('method-override');
const reviewRoutes = require("./routes/reviewRoutes");
const session = require('express-session');//for session storage
const flash = require('connect-flash');


//---------authentication-------
const authRoutes = require("./routes/authRoutes");//for authentication
const passport=require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User=require('./models/User');

//------------------session storage
let configSession = {
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}
app.use(session(configSession));
app.use(flash());


mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/baigan')
.then(()=>{console.log("DB connected")})
.catch((err)=>{console.log(err)})
 

app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname,'views'));
// now for public folder
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));

// seeding dummy data
//seedDB();

//---------------for auth
//passport ko initialise ...now jo hum login aur logout karte h  vo session storage mein save ya hatayenge(session storage more safe than cookies)
app.use(passport.initialize());
app.use(passport.session());
// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());//persistent login mtlab login ke baad kuch special time tak login rahoge tum
passport.deserializeUser(User.deserializeUser());//logout ke baad 

// use static authenticate method of model in LocalStrategy
//password bhaiya aapka middleware use karke through localstrategy schema user ar authentication chal jayega
passport.use(new LocalStrategy(User.authenticate));
//passport local strategy(out of 539 strategies jo passport ke documentation mein tha ) ki help se user ko authenticate karo

// Routes
app.use(productRoutes);
app.use(reviewRoutes);
app.use(authRoutes);

const port = 8080;
app.listen(port,()=>{
    console.log(`server connected at port : ${port} `);
})