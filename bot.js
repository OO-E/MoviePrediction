/**
 * Created by ozgun on 24.02.2017.
 *
 *
 */


var request             = require('request'); // İstek yapmak için kullanılacak paket.
var cheerio             = require('cheerio'); // Getirilen veriyi parçalamak için kullanılacak paket.
var film                = require('./Model/film');
var botSetting          = require('./Model/botSetting');


var count = 0;

var getID = function getData(startYear,maxYear,page) {

    botSetting.find({},function (err,bot) {

        if(err) throw  err

        if(bot.length == 0){

            var bs = new botSetting({maxYear:maxYear,startYear:startYear,page:page});
            bs.save();

        }else{

            bot[0].maxYear = maxYear;
            bot[0].startYear = startYear;
            bot[0].page = page;
            bot[0].save();


        }


    });

    var url = 'http://www.imdb.com/search/title?sort=moviemeter,asc&title_type=documentary&year='+startYear+'&page='+page+'&ref_=adv_nxt';

    var page = page;
    var startYear = startYear;
    var maxYear = maxYear;

    request(url, function (error, response, html) {

        if ( ! error && response.statusCode == 200) {

            var $ = cheerio.load(html);


            var lenght = $('div.ribbonize').length
            if(lenght != 0){

                 $('div.ribbonize').each(function(i, element){

                     $id = $(this).attr('data-tconst');
                     var flm = new film({sql_Id:$id});
                     flm.save(function (err) {
                         if(err) throw err;
                     });



                 });
                console.log("page "+page);
                count = count + lenght;
                page = page + 1;
                getData(startYear,maxYear,page);

            }else{
                startYear = startYear + 1;

                if(startYear <= maxYear){
                    page = 1;
                    getData(startYear,maxYear,page);

                    console.log("Bu yılda "+ startYear +" toplam " + count + " data oldu ");

                }else{

                    //bitti
                    console.log("Toplama işlemi bitti. toplam " + count + " data oldu ");

                }

            }

        }else{
            startYear = startYear + 1;
            page = 1
            getData(startYear,maxYear,page);
            console.log("Bu yılda "+ startYear +" toplam " + count + " data oldu ");


        }
    });



}


var getFilmDetail = function(imdb_ID){


/*
    var imdb = require('imdb');

    imdb(imdb_ID, function(err, data) {
        if(err)
            console.log(err.stack);

        if(data)
            console.log(data);
    });
*/

    const imdb = require('imdb-search');
    imdb.get(imdb_ID)
        .then((movie) => {
            console.log(movie);
        })
        .catch((err) => {
            console.log(err);
        });

}


exports.getID           = getID;
exports.getFilmDetail   = getFilmDetail;