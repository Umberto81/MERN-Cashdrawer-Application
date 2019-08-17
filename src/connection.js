
//the .env file should be inside the src folder with all the backend folder
require('dotenv').config();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const productsRoute = express.Router();
const path = require('path');
const loginRoute = express.Router();
const PORT = process.env.PORT || 4000;
const product_controller = require('./router_calls/products_controller');

const login_controller = require('./router_calls/login_controller');
const pwd = process.env.REACT_APP_MONGO_PASSWORD;
app.use(cors());

app.use(bodyParser.json());


// mongoose.connect('mongodb://127.0.0.1:27017/cashdrawer', { useNewUrlParser: true});
 mongoose.connect(process.env.MONGODB_URI || `mongodb+srv://goffredo:${pwd}@cluster0-b5oxy.mongodb.net/test?retryWrites=true&w=majority`, {useNewUrlParser: true});
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
productsRoute.route('/add').post(product_controller.saveProduct);


// show all the products
productsRoute.route('/').get(product_controller.showProducts);

//delete product by id
productsRoute.route('/delete/:id').delete(product_controller.deleteProductById);

//find product by number
productsRoute.route('/:nums').get(product_controller.findProductByCode);

//retrieve items by section
productsRoute.route('/section/:section').get(product_controller.getProductsBySection);

//find Product by description
productsRoute.route('/description/:description').get(product_controller.findProductByDescription);

/*****
 * 
 * LOGIN SECTION
 * 
 *****/

 loginRoute.route('/addLogin').post(login_controller.saveLogin);
 loginRoute.route('/delete/:id').delete(login_controller.deleteLoginById);
 loginRoute.route('/').get(login_controller.getLoginCredentials);


app.use('/products', productsRoute);
app.use('/login', loginRoute);


if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'build')));// Handle React routing, return all requests to React app
    app.get('/*', function(req, res) {
      res.sendFile(path.join(__dirname, 'build', 'index.html'));
    });
  }



app.listen(PORT, () =>{
    console.log('server running on port ' + PORT);
});


