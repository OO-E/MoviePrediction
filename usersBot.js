/**
 * Created by sefasaid on 13/03/2017.
 */

var request             = require('request'); // İstek yapmak için kullanılacak paket.
var cheerio             = require('cheerio'); // Getirilen veriyi parçalamak için kullanılacak paket.
var botIds              = require('./Model/botUsersId');
var botUsersSetting     = require('./Model/botUsersSetting');

var imdbUrl = "http://www.imdb.com/search/name?has=awards,bio,birth-date,death-date,height,quotes&sort=alpha&start=";
var countInPage = 50;
var page = 0;
var start = countInPage * page;

request(imdbUrl + start, function (error, response, html) {

    if ( ! error && response.statusCode == 200) {

        var $ = cheerio.load(html);

        $('td.name').each(function(i, element){

            var data = $(this);

            var id = data.children().first().attr('href');
            var name = data.children().first().text();

            var imdbId = id.split("/");
            console.log(imdbId[2]);
            var userId = new botIds;
            userId.id = imdbId[2];
            userId.name = name;
            userId.save();
        });

    }else{
    }
});