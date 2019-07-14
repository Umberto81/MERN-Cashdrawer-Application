//Bakery products schema
let BakeryProducts = require('../bakery.model');


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
