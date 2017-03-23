/**
 * Created by sefasaid on 13/03/2017.
 */




var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var botUserSettingsSchema = new Schema({
    page: Number
});




module.exports = mongoose.model('botUsersSettings', botUserSettingsSchema);