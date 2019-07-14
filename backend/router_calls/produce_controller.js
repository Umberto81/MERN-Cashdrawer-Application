//Produceproducts schema
let ProduceProducts = require('../produce_model');



exports.getProduceItem = (req, res) => {
    ProduceProducts.find({product_section: 'produce'},(err, produce) => {
        if (err) {
            console.log(err);
        } else {
            res.json(produce);
        }
    });
}
 


exports.findProduceByDescription = (req, res) =>{
    let description = req.params.produceProductName;
    ProduceProducts.find({product_description: description}, (err, product)=>{
        if(err){
            console.log(err);
        }else{
            res.json(product);
        }
    });
}


