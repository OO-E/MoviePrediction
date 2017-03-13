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

            // In examining the DOM we notice that the title rests within the first child element of the header tag.
            // Utilizing jQuery we can easily navigate and get the text by writing the following code:

            var id = data.children().first().attr('href');
            var name = data.children().first().text();

            // Once we have our title, we'll store it to the our json object.
            var imdbId = id.split("/");
            console.log(imdbId[2]);
        });

    }else{
    }
});