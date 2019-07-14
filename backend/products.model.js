const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// let Products = new Schema({
//     product_description: String,
//     product_number: Number,
//     product_price: Number,
//     product_count: Number,
//     product_code: [{type: Schema.Types.ObjectId, ref:''}]


  
// });


let Products = new Schema({
    product_description: String,
    product_number: Number,
    product_price: Number,
    product_count: Number

  
});

module.exports = mongoose.model('Products', Products);