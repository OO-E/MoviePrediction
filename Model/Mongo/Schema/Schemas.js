/**
 * Created by ozgun on 26.02.2017.
 */

var mongo = require("./Model/Mongo/Mongo.js");
// ---------  Schema

class Schemas {


    constructor(){


    }


    getFilm(){

        return  new mongo.Schema({
            id:String,
            title:String
        });

    }

}

//----------


