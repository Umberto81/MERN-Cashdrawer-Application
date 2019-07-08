const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Login = new Schema({
    userName: String,
    password: String
});

module.exports = mongoose.model('Login', Login);

