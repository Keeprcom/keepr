var mongoose = require('mongoose');
var Schema       = mongoose.Schema;

var userSchema   = new Schema({
    First        : String,
    Last         : String
});

module.exports = mongoose.model('User', userSchema);
