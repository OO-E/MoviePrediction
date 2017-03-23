/**
 * Created by sefasaid on 13/03/2017.
 */

var request             = require('request'); // İstek yapmak için kullanılacak paket.
var cheerio             = require('cheerio'); // Getirilen veriyi parçalamak için kullanılacak paket.
var botIds             = require('./Model/botUsersId');
var botUsersSetting     = require('./Model/botUsersSetting');

var imdbUrl = "http://www.imdb.com/search/name?has=awards,bio,birth-date,death-date,height,quotes&sort=alpha&start=";

var start = 0 ;

function bot() {

    botIds.count({}, function(err, c) {
        console.log(c);

        request(imdbUrl + c, function (error, response, html) {
            if ( ! error && response.statusCode == 200) {
                var $ = cheerio.load(html);
                var count = 0;
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
                    count++;
                    if(count == 49){
                        bot()
                    }
                });
            }else{
            }
        });
    });

}
bot();
