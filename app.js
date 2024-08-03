// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;


const mongoose = require('mongoose');
const orderModel = require('./models/orderModel');
require('./models/productModel');

(async () =>{
    // let database;
    // const client = await MongoClient.connect('mongodb://127.0.0.1:27017')
    //     database = client.db('shop');
    //     if(!database){
    //         console.log("Databse Not connected");
    //     }
    //     else {
    //         console.log("Database Connected!");

    //         // Perform the aggregation
    //         const orders = await database.collection('orders').aggregate([
    //             {
    //                 $lookup: {
    //                     from: 'products',
    //                     localField: 'product_ids',
    //                     foreignField: '_id', // Fixed typo here
    //                     as: 'products'
    //                 }
    //             }
    //         ]).toArray();

    //         console.log(JSON.stringify(orders));
    //     }
     
    mongoose.connect('mongodb://127.0.0.1:27017/shop').then(()=>{
        console.log("Databse connected");
    }).catch(()=>{
        console.log("database not connected");
    })
    const orders = await orderModel.find({}).populate(['product_ids','customer_id']);//for populate if one field string is enough if more than one use array
    console.log(orders);
})();