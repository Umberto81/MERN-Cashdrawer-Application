//Produceproducts schema
let ProduceProducts = require('../produce_model');


exports.saveNewProduce = (req, res) => {
    let produceProducts = new ProduceProducts(req.body);

    produceProducts.save()
        .then(todo => {
            res.status(200).json({
                'product': 'product added successfully'
            });
        })
        .catch(err => {
            res.status(400).send('adding product failed');
        });
}

exports.getProduceItem = (req, res) => {
    ProduceProducts.find({product_section: 'produce'},(err, produce) => {
        if (err) {
            console.log(err);
        } else {
            res.json(produce);
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

exports.updateProduceItemById = (req, res) => {
    ProduceProducts.findById(req.params.id, (err, item) =>{
        if(!item){
            res.status(404).send('item not found');
        }else{
            item.product_description = req.body.product_description;
            item.img_path = req.body.img_path;
            item.product_price = req.body.product_price;
            item.product_count = req.body.product_count;

            item.save().then(item => {
                res.json('item updated');
            }).catch(err =>{
                res.status(400).send('update not possible');
            });
        }
    });
}

