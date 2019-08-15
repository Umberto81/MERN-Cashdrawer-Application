//Produceproducts schema
//let ProduceProducts = require('../produce_model');

let Products = require('../products.model');


exports.findProduceByDescription = (req, res) =>{
    let description = req.params.produceProductName;
    
    Products.find({product_description: description}, (err, product)=>{
        if(err){
            console.log(err);
        }else{
            res.json(product);
        }
    });
}
//

