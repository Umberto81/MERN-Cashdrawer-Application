
let Products = require('../products.model');


exports.getProductsBySection = (req, res) => {
    let section = req.params.section;
    Products.find({product_section: section},(err, product) => {
        if (err) {
            console.log(err);
        } else {
            res.json(product);
        }
    });
}

exports.deleteProductById = (req, res) => {
    let id = req.params.id;
    Products.findByIdAndRemove(id, (err) => {
        if (err) {
            console.log(err);
        } else {
            res.json({
                message: 'deleted'
            });
        }
    });
}

exports.findProductByDescription = (req, res) => {
    let description = req.params.description;
    Products.find({
        product_description: description
    }, (err, product) => {
        if (err) {
            console.log(err);
        } else {
            res.json(product);
        }
    });
}

exports.updateProductById = (req, res) => {
    Products.findById(req.params.id, (err, item) =>{
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

exports.saveProduct = (req, res) => {
    let Product = new Products(req.body);
    Product.save()
        .then(todo => {
            res.status(200).json({
                'product': 'product added successfully'
            });
        })
        .catch(err => {
            res.status(400).send('adding new img failed');
        });
}









/** */

exports.showProducts = (req, res) => {
    Products.find((err, todos) => {
        if (err) {
            console.log(err);
        } else {
            res.json(todos);
        }
    });
}

exports.deleteProduct = (req, res) => {
    let id = req.params.id;
    Products.findByIdAndRemove(id, (err) => {
        if (err) {
            console.log(err);
        } else {
            res.json({
                message: 'deleted'
            });
        }
    });
}

exports.findProductByCode = (req, res) => {
let nums = req.params.nums;
Products.find({
    product_code: nums
}, (err, product) => {
    if (err) {
        console.log(err);
    } else {
        res.json(product);
    }
});
}


exports.addProduct = (req, res) => {
        let products = new Products(req.body);
        products.save()
            .then(todo => {
                res.status(200).json({
                    'product': 'product added successfully'
                });
            })
            .catch(err => {
                    res.status(400).send('adding new todo failed');
                })}

exports.searchProductByCode = (req, res) =>{
    
}