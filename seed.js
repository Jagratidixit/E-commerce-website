// // to daalo dummy data
// //1-working with DB 
// const mongoose=require('mongoose');
// const Product =require('./models/Product');


// //2-DUMMY DATA---------------------------------
// let products=[
//     {
//         name:"Modi ji",
//         img:"https://cdn4.sharechat.com/img_640445_dbec1_1677936637545_sc.jpg?tenant=sc&referrer=pwa-sharechat-service&f=545_sc.jpg",
//         price:1500000,
//         desc:"bohat badiya gendbaaz"
//     },
//     {
//         name:"arvind kejriwal",
//         img:"https://indianmemetemplates.com/wp-content/uploads/arvind-kejriwal-yawning-during-protest.jpg",
//         price:150,
//         desc:"jheelo ka shaher"
//     },
//     {
//         name:"Rahul Gandhi",
//         img:"https://static.toiimg.com/photo/msid-56231743/56231743.jpg?25275",
//         price:1000000 ,
//         desc:"idhar se aalu dalo udhr se sona"

//     },
//     {
//         name:"Georgia Melony",
//         img:"https://c.ndtvimg.com/2023-03/6p3gj82_modi-meloni_625x300_02_March_23.jpg?im=Resize=(1230,900)",
//         price: 60000,
//         desc:"waah modi ji waah"
//     },
//     {
//         name:"Mamta Banerjee",
//         img:"https://stickermakerr.com/stickersassets/politicx6/mamata_07.webp",
//         price: 555,
//         desc:"No comments"
//     },
//     {
//         name:"Bhupender jogi",
//         img:"https://i.ytimg.com/vi/2lb7RaXzBJc/maxresdefault.jpg",
//         price: 20000,
//         desc:"us mein bahut jagah gaya hun"
//     },
//     {
//         name:"Yogi Ji",
//         img:"https://i.pinimg.com/736x/5c/c5/0f/5cc50fbf8999bc1feebad1af044aca9d.jpg",
//         price: 250000,
//         desc:"Jai Shree Ram"
//     }

// ]

// //3-to send DATA 
// async function seedDB(){
//      await Product.insertMany(products);
//      console.log("Data seeded");
//      //promise returned by function therefore to avoid chaining we use async,await ki LOAD DATA ..WAIT JAB TAK PURA NA AAYE

// }
// module.exports =seedDB;//exported this taaki app.ja jo pehle chalega usmein run ho jaye.,//export in app.js

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const mongoose = require('mongoose');
const Product = require('./models/Product');

const products = [
    {
        name:"iphone 14pro",
        img:'https://images.unsplash.com/photo-1677144646095-ecd95d06cd71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aXBob25lJTIwMTQlMjBwcm98ZW58MHx8MHx8fDA%3D',
        price: 140000,
        desc: "bohat mahenga"
    },
    {
        name:"macbook m2",
        img:'https://images.unsplash.com/photo-1675868374360-3af667d58bf8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFjYm9vayUyMG0yfGVufDB8fDB8fHww',
        price: 250000,
        desc: "aukaat ke bahar"
    },
    {
        name:"iwatch",
        img:'https://images.unsplash.com/photo-1434493907317-a46b5bbe7834?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGl3YXRjaHxlbnwwfHwwfHx8MA%3D%3D',
        price: 70000,
        desc: "useless product"
    },
    {
        name:"ipad",
        img:'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXBhZHxlbnwwfHwwfHx8MA%3D%3D',
        price: 88000,
        desc: "badiya cheez"
    },
    {
        name:"airpods",
        img:'https://images.unsplash.com/photo-1610438235354-a6ae5528385c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWlycG9kc3xlbnwwfHwwfHx8MA%3D%3D',
        price: 27000,
        desc: "vahiyaad thuuu radddi"
    }
]

async function seedDB(){
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log("data seeded successfully")
}

module.exports = seedDB;