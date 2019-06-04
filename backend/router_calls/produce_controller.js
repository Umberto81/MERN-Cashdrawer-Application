//Produceproducts schema
let ProduceProducts = require('../produce_model');


exports.saveNewProduce = (req, res) => {
    let produceProducts = new ProduceProducts(req.body);

    produceProducts.save()
        .then(todo => {
            res.status(200).json({
                'img': 'img added successfully'
            });
        })
        .catch(err => {
            res.status(400).send('adding new img failed');
        });
}

exports.getProduceIten = (req, res) => {
    ProduceProducts.find((err, bakery) => {
        if (err) {
            console.log(err);
        } else {
            res.json(bakery);
        }
    });
}

exports.deleteProduceById = (req, res) => {
    let id = req.params.id;
    ProduceProducts.findByIdAndRemove(id, (err) => {
        if (err) {
            console.log(err);
        } else {
            res.json({
                message: 'deleted'
            });
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