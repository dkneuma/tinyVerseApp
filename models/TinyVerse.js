/**
 * Created by daniel.neumann on 6/5/15.
 */
var mongoose = require("mongoose");

var TinyverseSchema = new mongoose.Schema({
    verse: String,
    reference: String,
    comment: String,
    updated_at: {type: Date, default: Date.now() }
});

module.exports = mongoose.model('Tinyverse',TinyverseSchema);