
let Products = require('../products.model');


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

exports.findProductByNumber = (req, res) => {
let nums = req.params.nums;
Products.find({
    product_number: nums
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
                    'todo': 'todo added successfully'
                });
            })
            .catch(err => {
                    res.status(400).send('adding new todo failed');
                })}