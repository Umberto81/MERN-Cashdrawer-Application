//Bakery products schema
let BakeryProducts = require('../bakery.model');


exports.getBakeryItem = (req, res) => {
    BakeryProducts.find((err, bakery) => {
        if (err) {
            console.log(err);
        } else {
            res.json(bakery);
        }
    });
}

exports.deleteBakeryItemById = (req, res) => {
    let id = req.params.id;
    BakeryProducts.findByIdAndRemove(id, (err) => {
        if (err) {
            console.log(err);
        } else {
            res.json({
                message: 'deleted'
            });
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
                'img': 'img added successfully'
            });
        })
        .catch(err => {
            res.status(400).send('adding new img failed');
        });
}