/**
 * Created by sefasaid on 13/03/2017.
 */




var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/imdbb');
var Schema = mongoose.Schema;

var botUserId = new Schema({
    id: String,
    name : String
});




module.exports = mongoose.model('botUserId', botUserId);