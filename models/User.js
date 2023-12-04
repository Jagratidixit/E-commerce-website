const mongoose = require('mongoose');
const passportLocalMongoose =require('passport-local-mongoose');

// creating user schema for authentication
let userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        trim:true 
    }
    
});

userSchema.plugin(passportLocalMongoose);//imp need to be written always
// creating model
let User = mongoose.model('User' , userSchema )

module.exports = User; //sending the model to be used anywhere when required