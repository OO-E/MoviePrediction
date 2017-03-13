/**
 * Created by sefasaid on 13/03/2017.
 */




var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var botUserId = new Schema({
    id: String
});




module.exports = mongoose.model('botUserId', botUserId);