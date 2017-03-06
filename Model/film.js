/**
 * Created by ozgun on 27.02.2017.
 */




var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var filmSchema = new Schema({

    sql_Id: {
        type: String
    }
}, { timestamps: { createdAt: 'created_at', updatedAt : 'updated_at' } });




module.exports = mongoose.model('Film', filmSchema);
