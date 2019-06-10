const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProduceProducts = new Schema({
    
    product_description: String,
    img_path: String,
    product_price: Number,
    product_count: Number
});

module.exports = mongoose.model('ProduceProducts', ProduceProducts);