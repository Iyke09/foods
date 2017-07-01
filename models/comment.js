var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: false},
    description: {type: String, required: true},
    user:{type: Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Comment', schema);