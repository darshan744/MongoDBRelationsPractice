const mongoose = require('mongoose');

productSchema =  mongoose.Schema({
    name:String,

})

const productModel = mongoose.model('Product',productSchema);

module.exports = productModel;