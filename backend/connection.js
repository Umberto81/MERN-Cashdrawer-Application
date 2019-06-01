const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const productsRoute = express.Router();
const bakeryRoute = express.Router();
const produceRoute = express.Router();
const PORT = 4000;
//products schema
let Products = require('./products.model');

//Bakery products schema
let BakeryProducts = require('./bakery.model');

//Produceproducts schema
let ProduceProducts = require('./produce_model');

app.use(cors());
app.use(bodyParser.json());


mongoose.connect('mongodb://127.0.0.1:27017/cashdrawer', { useNewUrlParser: true});
const connection = mongoose.connection;

connection.once('open', () =>{
    console.log('connected to cashdrawer');
});


/*****
 * 
 * 
 * 
 * PRODUCTS SECTION
 * 
 * 
 * 
 *****/

//save new product
productsRoute.route('/add').post((req, res) => {
    let products = new Products(req.body);
    products.save()
        .then(todo => {
            res.status(200).json({'todo': 'todo added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new todo failed');
        });
});


// show all the products
productsRoute.route('/').get((req, res) => {
    Products.find((err, todos) => {
        if (err) {
            console.log(err);
        } else {
            res.json(todos);
        }
    });
});

//delete product by id
productsRoute.route('/delete/:id').delete((req, res) => {
    let id = req.params.id;
    Products.findByIdAndRemove(id, (err)=> {
        if (err) {
            console.log(err);
        } else{
            res.json({message: 'deleted'});
        }
    });
});

//find product by number
productsRoute.route('/:nums').get((req, res) =>{
    let nums = req.params.nums;
    Products.find({product_number: nums}, (err, product)=>{
        if(err){
            console.log(err);
        }else{
            res.json(product);
        }
    });
});


/*****
 * 
 * 
 * 
 * BAKERY SECTION
 * 
 * 
 * 
 *****/


//save new bakery
bakeryRoute.route('/addBakeryProduct').post((req, res) => {
    let bakeryProducts = new BakeryProducts(req.body);
    
    bakeryProducts.save()
        .then(todo => {
            res.status(200).json({'img': 'img added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new img failed');
        });
});

//retrieve bakery items
bakeryRoute.route('/').get((req, res) => {
    BakeryProducts.find((err, bakery) => {
        if (err) {
            console.log(err);
        } else {
            res.json(bakery);
        }
    });
});

//delete bakeryProduct by id
bakeryRoute.route('/delete/:id').delete((req, res) => {
    let id = req.params.id;
    BakeryProducts.findByIdAndRemove(id, (err)=> {
        if (err) {
            console.log(err);
        } else{
            res.json({message: 'deleted'});
        }
    });
});

//find bakeryProduct by description
bakeryRoute.route('/:bakeryProductName').get((req, res) =>{
    let description = req.params.bakeryProductName;
    BakeryProducts.find({product_description: description}, (err, product)=>{
        if(err){
            console.log(err);
        }else{
            res.json(product);
        }
    });
});


/*****
 * 
 * 
 * 
 * PRODUCE SECTION
 * 
 * 
 * 
 *****/

//save new produce
produceRoute.route('/addProduceProduct').post((req, res) => {
    let produceProducts = new ProduceProducts(req.body);
    
    produceProducts.save()
        .then(todo => {
            res.status(200).json({'img': 'img added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new img failed');
        });
});

//retrieve produce items
produceRoute.route('/').get((req, res) => {
    ProduceProducts.find((err, bakery) => {
        if (err) {
            console.log(err);
        } else {
            res.json(bakery);
        }
    });
});

//delete produceProduct by id
produceRoute.route('/delete/:id').delete((req, res) => {
    let id = req.params.id;
    ProduceProducts.findByIdAndRemove(id, (err)=> {
        if (err) {
            console.log(err);
        } else{
            res.json({message: 'deleted'});
        }
    });
});

//find produceProduct by description
produceRoute.route('/:produceProductName').get((req, res) =>{
    let description = req.params.produceProductName;
    ProduceProducts.find({product_description: description}, (err, product)=>{
        if(err){
            console.log(err);
        }else{
            res.json(product);
        }
    });
});

app.use('/products', productsRoute);
app.use('/bakery', bakeryRoute);
app.use('/produce', produceRoute);


app.listen(PORT, () =>{
    console.log('server running on port ' + PORT);
});




