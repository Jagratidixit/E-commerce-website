//products ke saath kaam app.get etc therefore work with server so require server(express)
//1---------------------------------------------------------
// const express =require('express');
// const Product=require('../models/Product');
// const router=express.Router()//mini application/instance


// router.post('/products/:id/review',async(req,res)=>{ //id of product....this route hit when form submit
//     let {id}= req.params;//to get id
//     let {rating,comment}=req.body;// ye naam form mein jo ham "name" ke andar daalte h vo hi likh dete h
//     let product= await Product.findById(id);//to get product
  
//     let review= new Review({rating,comment});//to push new review we need full product schema jiske andar review ka array hoga therefore we did
//     product.reviews.push(review);
//     await product.save();//async and await coz working with DB
//     await review.save();
//     res.send("review stored successfully")
// })


//--------------------------------------------------------------------------------------------------
const express =  require('express');
const Product = require('../models/Product');
const Review = require('../models/Review');

const router = express.Router();

router.post('/products/:productId/review' , async(req,res)=>{

        let {productId} = req.params;
        let {rating , comment} = req.body;
        const product = await Product.findById(productId);
        console.log(product);
        // creating a new review
        const review  = new Review({rating , comment}); // let review  = new Review({...req.body}) 
        
        // adding review id to product array
        product.reviews.push(review); //mongodb internally isme se id nikaal kr usse push krdega.
        
        await review.save();
        await product.save();
        res.redirect(`/products/${productId}`)
    
})


module.exports = router;