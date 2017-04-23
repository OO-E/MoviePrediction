/**
 * Created by ozgun on 5.03.2017.
 */



var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var botSchema = new Schema({

    startYear:{
        type:String

    },
    maxYear:{
        type:String
    },
    page:{
        type:String
    }
}, { timestamps: { createdAt: 'created_at', updatedAt : 'updated_at' } });




module.exports = mongoose.model('botsetting', botSchema);