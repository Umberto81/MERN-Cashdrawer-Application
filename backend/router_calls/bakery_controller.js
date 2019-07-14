//Bakery products schema
let BakeryProducts = require('../bakery.model');


exports.getBakeryItem = (req, res) => {
    BakeryProducts.find({product_section: 'bakery'},(err, bakery) => {
        if (err) {
            console.log(err);
        } else {
            res.json(bakery);
        }
    });
}


exports.findBakeryItemByDescription = (req, res) => {
    let description = req.params.bakeryProductName;
    BakeryProducts.find({
        product_description: description
    }, (err, product) => {
        if (err) {
            console.log(err);
        } else {
            res.json(product);
        }
    });
}

exports.saveNewBakery = (req, res) => {
    let bakeryProducts = new BakeryProducts(req.body);
    bakeryProducts.save()
        .then(todo => {
            res.status(200).json({
                'product': 'product added successfully'
            });
        })
        .catch(err => {
            res.status(400).send('adding new img failed');
        });
}