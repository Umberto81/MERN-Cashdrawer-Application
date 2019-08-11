const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Login = new Schema({
   // userName: String,
    password: Number
});

module.exports = mongoose.model('Login', Login);

