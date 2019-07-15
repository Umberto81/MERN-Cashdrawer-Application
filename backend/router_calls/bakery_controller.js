//Bakery products schema
let BakeryProducts = require('../bakery.model');


exports.findItemByName = (req, res) => {
    let name = req.params.name;
    BakeryProducts.find({
        product_name: name,
    }, (err, product) => {
        if (err) {
            console.log(err);
        } else {
            res.json(product);
        }
    });
}


// //Bakery products schema
// let BakeryProducts = require('../bakery.model');


// exports.getBakeryItem = (req, res) => {
//     BakeryProducts.find({product_section: 'bakery'},(err, bakery) => {
//         if (err) {
//             console.log(err);
//         } else {
//             res.json(bakery);
//         }
//     });
// }

// exports.deleteBakeryItemById = (req, res) => {
//     let id = req.params.id;
//     BakeryProducts.findByIdAndRemove(id, (err) => {
//         if (err) {
//             console.log(err);
//         } else {
//             res.json({
//                 message: 'deleted'
//             });
//         }
//     });
// }

// exports.findBakeryItemByDescription = (req, res) => {
//     let description = req.params.bakeryProductName;
//     BakeryProducts.find({
//         product_description: description
//     }, (err, product) => {
//         if (err) {
//             console.log(err);
//         } else {
//             res.json(product);
//         }
//     });
// }

// exports.updateBakeryItemById = (req, res) => {
//     BakeryProducts.findById(req.params.id, (err, item) =>{
//         if(!item){
//             res.status(404).send('item not found');
//         }else{
//             item.product_description = req.body.product_description;
//             item.img_path = req.body.img_path;
//             item.product_price = req.body.product_price;
//             item.product_count = req.body.product_count;

//             item.save().then(item => {
//                 res.json('item updated');
//             }).catch(err =>{
//                 res.status(400).send('update not possible');
//             });
//         }
//     });
// }

// exports.saveNewBakery = (req, res) => {
//     let bakeryProducts = new BakeryProducts(req.body);
//     bakeryProducts.save()
//         .then(todo => {
//             res.status(200).json({
//                 'product': 'product added successfully'
//             });
//         })
//         .catch(err => {
//             res.status(400).send('adding new img failed');
//         });
// }