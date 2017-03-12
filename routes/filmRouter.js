/**
 * Created by ozgun on 27.02.2017.
 */


var express = require('express');
var filmRouter = express.Router();
var films = require("../Model/film");
var botS = require("../Model/botSetting");
var botFS = require("../Model/botFilmSetting");
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

    botFS.find({},function (err,stt) {

        if(err) throw  err

        if(stt.length == 0){

            var bfs = new botFS({page:1});
            bfs.save();
            bot.getFilmDetail(1);

        }else{
            var page = parseInt(stt[0].page);
            bot.getFilmDetail(page);
        }
    });

    res.json({"OK":"OK"});


});

module.exports = filmRouter;
