
//----------------------------------------
//products ke saath kaam app.get etc therefore work with server so require server
 //1---------------------------------------------------------
const express =  require('express');
const Product = require('../models/Product');
const router = express.Router();//mini application/instance

// displaying all the products READ of crud
router.get('/products' , async(req,res)=>{
    let products = await Product.find({});//return promise
    res.render('products/index' , {products});
})


// adding a form for  anew product
router.get('/products/new' , (req,res)=>{
    res.render('products/new');
})

// actually adding a product in a DB 
router.post('/products' , async (req,res)=>{
    let {name,img,price,desc} = req.body;
    await Product.create({name,img,price,desc});
    res.redirect('/products');
})

// route for shwoing the deatails of thre products
router.get('/products/:id' , async(req,res)=>{
    let {id} = req.params;
    // let foundProduct = await Product.findById(id);
    let foundProduct = await Product.findById(id).populate('reviews'); //here
    console.log(foundProduct);
    res.render('products/show' , {foundProduct});

})

// route for editing the product so we need form for it
router.get('/products/:id/edit' , async(req,res)=>{
    let {id} = req.params;
    let foundProduct = await Product.findById(id);
    res.render('products/edit' , {foundProduct});
})

// changing the original edits in the database made in the editform 
router.patch('/products/:id' , async(req,res)=>{
    let {id} = req.params;
    let {name,img,price,desc} = req.body;
    await Product.findByIdAndUpdate(id , {name,img,price,desc});
    res.redirect(`/products/${id}`)
})

//delete a route
router.delete('/products/:id' , async(req,res)=>{
    let {id} = req.params;
    await Product.findByIdAndDelete(id);
    res.redirect('/products');
})

//-never export "APP.JS" coz this is instance of whole app,isse run sab kuch
//-now we need app.js kyonki us par hi hame app.get,post ,delete,patch chalana h to kya kare
//-we use"mini application-"ROUTER"(MIMI APP jo saari instance provide so we can send request like app.ja ya jo bhi vo kaam karta h)

module.exports = router;