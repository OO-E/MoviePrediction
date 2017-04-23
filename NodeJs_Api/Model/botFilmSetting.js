/**
 * Created by ozgun on 12.03.2017.
 */





var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var botSchema = new Schema({
    page:{
        type:String
    }
}, { timestamps: { createdAt: 'created_at', updatedAt : 'updated_at' } });




module.exports = mongoose.model('botfilmsetting', botSchema);