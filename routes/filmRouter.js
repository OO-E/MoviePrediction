/**
 * Created by ozgun on 27.02.2017.
 */


var express = require('express');
var filmRouter = express.Router();
var films = require("../Model/film");
var bot = require("../Model/botSetting");
var ttt = require("../test");
/* GET home page. */
filmRouter.get('/', function(req, res, next) {


    res.render('index', { title: 'Express' });

});


filmRouter.get('/bot',function (req,res,next) {



    bot.find({},function (err,obj) {

        if(obj.length == 0){

            ttt.getID(1910,2018,0);

        }else{
            $page = parseInt(obj[0].page);
            $startY = parseInt(obj[0].startYear);
            $maxY = parseInt(obj[0].maxYear);
            ttt.getID($startY,$maxY,$page);

        }

    });



        res.json({"OK":"OK"});

});

module.exports = filmRouter;
