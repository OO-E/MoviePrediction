/**
 * Created by ozgun on 27.02.2017.
 */



export  class Mongo{

    var mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost:27017/admin');
    var db = mongoose.connection;
    var Schema = mongoose.Schema;
    var Model = mongoose.model;

    constructor(){

        db.on('error',console.error.bind(console,"connection error"))
        db.once('open',function () {

            console.log("connection open");

        })
    }


}



// Mongo Model



