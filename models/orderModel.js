const {ObjectId} = require('mongodb')
const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    name:String
})
const customerModel = mongoose.model('Customer',customerSchema);

const orderSchema = new mongoose.Schema({
    amount:String,
   // customer_id:ObjectId,//To tell that the customer_id is ObjectID the above (from mongodb) or to use from mongoose comamnd is mongoose.SchemaTypes.ObjectID
    customer_id:{
        type:ObjectId,
        ref:'Customer'
    },
   product_ids:[
        {
            type:ObjectId,
            ref:'Product'
        }
    ]
})

const orderModel = mongoose.model('Order',orderSchema);

module.exports = orderModel;