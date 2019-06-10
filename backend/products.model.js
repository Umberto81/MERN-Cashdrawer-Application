const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Products = new Schema({
    product_description: String,
    product_number: Number,
    product_price: Number,
    product_count: Number

  
});

module.exports = mongoose.model('Products', Products);