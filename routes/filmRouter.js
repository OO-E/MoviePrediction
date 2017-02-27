/**
 * Created by ozgun on 27.02.2017.
 */


var express = require('express');
var filmRouter = express.Router();
var films = require("../Model/film");

/* GET home page. */
filmRouter.get('/', function(req, res, next) {


    var ss = new films({name:"deneme",sql_Id:"tt123123adas"});
    
    ss.save(function (error) {
        if(error){

            console.log(error);
        }else{
            console.log("oldu");

        }
    })

    res.render('index', { title: 'Express' });

});

module.exports = filmRouter;
