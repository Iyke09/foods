var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    name: {type: String, required: false},
    description: {type: String, required: false},
    imagePath: {type: String, required: false},
    price: {type: String, required: false, unique: true},
    category: {type: String, required: false},
    likes:{type: Number, required: false},
});

module.exports = mongoose.model('food', schema);