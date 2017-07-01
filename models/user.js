var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    firstName: {type: String, required: false},
    lastName: {type: String, required: false},
    image: {type: String, required: false},
    password: {type: String, required: false},
    email: {type: String, required: false, unique: true},
    comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', schema);