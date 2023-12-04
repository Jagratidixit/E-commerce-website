
//--------------------------------------------------------------------------------------
//capital 'p' in file name coz model is a javascript class 
//1-require mongoose coz to work with database we need mongoose
const mongoose = require('mongoose');
//2-creating product schema
const productSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true
    },
    img:{
        type:String,
        trim:true,
        default:'https://images.unsplash.com/photo-1599508704512-2f19efd1e35f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cXVlc3Rpb258ZW58MHx8MHx8fDA%3D'

    },
    price:{
        type:Number,
        min:0,
        default:null,
        required:true
    },
    desc:{//description
        type:String,
        trim:true
    },
    reviews:[
        {
            type:mongoose.Schema.Types.ObjectId,//means sun mongoose dusre schema mein ja ,uska type utha,aur ObjectId mein store karde.
            ref:'Review'//ye bata raha h ki kaun se collection/schema mein jaun
        }
    ]
});
//3---------------------------
let Product = mongoose.model('Product' , productSchema);//(MODEL,SCHEMA)
module.exports = Product;//if this model product is needed somewhere else ,hence exported and when we need it we will require it.