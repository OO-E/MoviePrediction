/**
 * Created by ozgun on 27.02.2017.
 */


var express = require('express');
var filmRouter = express.Router();
var films = require("../Model/film");
var botS = require("../Model/botSetting");
var bot = require("../bot");
/* GET home page. */
filmRouter.get('/', function(req, res, next) {


    res.render('index', { title: 'Express' });

});


filmRouter.get('/bot',function (req,res,next) {



    botS.find({},function (err,obj) {

        if(obj.length == 0){

            bot.getID(1910,2018,0);

        }else{
            $page = parseInt(obj[0].page);
            $startY = parseInt(obj[0].startYear);
            $maxY = parseInt(obj[0].maxYear);
            bot.getID($startY,$maxY,$page);

        }

    });



        res.json({"OK":"OK"});

});

filmRouter.get("/bot/film",function (req,res,next) {


    bot.getFilmDetail(1);

    res.json({"OK":"OK"});


});

module.exports = filmRouter;
