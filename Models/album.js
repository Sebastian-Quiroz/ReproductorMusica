'use strict'

var moongose = require('mongoose');
var schema = moongose.Schema;

var albumSchema = schema({
    title: String,
    description: String,
    year: Number,
    image: String,
    artist: { type: Schema.ObjectId, ref: 'artist'}
});

module.exports = moongose.model('album', albumSchema);