
//the .env file should be inside the src folder with all the backend folder
require('dotenv').config();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const productsRoute = express.Router();
const bakeryRoute = express.Router();
const produceRoute = express.Router();
const loginRoute = express.Router();
const PORT = 4000;
const product_controller = require('./router_calls/products_controller');
const bakery_controller = require('./router_calls/bakery_controller');
const produce_controller = require('./router_calls/produce_controller');
const login_controller = require('./router_calls/login_controller');
const pwd = process.env.MONGO_PASSWORD;
app.use(cors());
app.use(bodyParser.json());


// mongoose.connect('mongodb://127.0.0.1:27017/cashdrawer', { useNewUrlParser: true});
 mongoose.connect(`mongodb+srv://goffredo:${pwd}@cluster0-b5oxy.mongodb.net/test?retryWrites=true&w=majority`, {useNewUrlParser: true});
const connection = mongoose.connection;



connection.once('open', () =>{
    console.log('connected to cashdrawer');
});


/*****
 * 
 * PRODUCTS SECTION
 * 
 *****/

//save new product
productsRoute.route('/add').post(product_controller.addProduct);


// show all the products
productsRoute.route('/').get(product_controller.showProducts);

//delete product by id
productsRoute.route('/delete/:id').delete(product_controller.deleteProduct);

//find product by number
productsRoute.route('/:nums').get(product_controller.findProductByNumber);


/*****
 * 
 * BAKERY SECTION
 * 
 *****/


//save new bakery
bakeryRoute.route('/addBakeryProduct').post(bakery_controller.saveNewBakery);

//retrieve bakery items
bakeryRoute.route('/').get(bakery_controller.getBakeryItem);

//delete bakeryProduct by id
bakeryRoute.route('/delete/:id').delete(bakery_controller.deleteBakeryItemById);

//update bakeryProduct by id
bakeryRoute.route('/update/:id').post(bakery_controller.updateBakeryItemById);

//find bakeryProduct by description
bakeryRoute.route('/:bakeryProductName').get(bakery_controller.findBakeryItemByDescription);


/*****
 * 
 * PRODUCE SECTION
 * 
 *****/

//save new produce
produceRoute.route('/addProduceProduct').post(produce_controller.saveNewProduce);

//retrieve produce items
produceRoute.route('/').get(produce_controller.getProduceItem);

//delete produceProduct by id
produceRoute.route('/delete/:id').delete(produce_controller.deleteProduceById);

//find produceProduct by description
produceRoute.route('/:produceProductName').get(produce_controller.findProduceByDescription);


/*****
 * 
 * LOGIN SECTION
 * 
 *****/

 loginRoute.route('/addLogin').post(login_controller.saveLogin);
 loginRoute.route('/').get(login_controller.getLoginCredentials);


app.use('/products', productsRoute);
app.use('/bakery', bakeryRoute);
app.use('/produce', produceRoute);
app.use('/login', loginRoute);



app.listen(PORT, () =>{
    console.log('server running on port ' + PORT);
});




