'use strict'

var mongoose = require('mongoose');
var schema = mongoose.Schema;

var artistSchema = schema({
    name: String,
    description: String,
    image: String
});

module.exports = mongoose.model('artist_',artistSchema);