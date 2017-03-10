/**
 * Created by ozgun on 27.02.2017.
 */




var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');


var Schema = mongoose.Schema;

var filmSchema = new Schema({

    sql_Id: {type: String},
    year:{type: String},
    title:{type : String},
    rated:{type:String},
    season:{type:String},
    episode:{type:String},
    released:{type:String},
    runtime:{type:String},
    countries:{type:[String]},
    genres:{type:[String]},
    director:{type:String},
    writers:{type:String},
    actors:{type:String},
    plot:{type:String},
    poster:{type:String},
    rating:{type:Number},
    votes:{type:Number},
    tomato:{type:String},
    metacritic:{type:Number},
    awards:{wins:{type:Number},nomination:{type:Number},text:{type:String}},
    type:{type:String}



}, { timestamps: { createdAt: 'created_at', updatedAt : 'updated_at' } });
filmSchema.plugin(mongoosePaginate);



module.exports = mongoose.model('Film', filmSchema);
