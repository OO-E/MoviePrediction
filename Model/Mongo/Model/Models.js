/**
 * Created by ozgun on 26.02.2017.
 */

var mongo = require("Model/Mongo/Mongo.js");
var schema =  require("./Model/Mongo/Schema/Schemas.js");


// ---------  Film Model

class Models {

    constructor(){


    }

    Film(param){

        var model_Film = mongo.Model("Film",schema().getFilm());
        var film = model_Film(param);
        return film;
    }


}