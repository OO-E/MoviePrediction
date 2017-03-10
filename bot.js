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


var getFilmDetail = function(page){


    film.paginate({}, { page: page, limit: 1 }, function(err, result) {

        if(result['docs'].length>0){


            var id = result["docs"][0]["sql_Id"]
            const imdb = require('imdb-search');
            imdb.get(id)
                .then((movie) => {

                film.find({sql_Id:id},function (err,filmOne) {
                    if(err) throw err

                    if(filmOne.length != 0){

                        console.log(filmOne);
                        filmOne[0].type         = movie["type"];
                        filmOne[0].awards       = movie["awards"];
                        filmOne[0].metacritic   = movie["metacritic"];
                        filmOne[0].tomato       = movie["tomato"];
                        filmOne[0].rating       = movie["imdb"]["rating"];
                        filmOne[0].votes        = movie["imdb"]["votes"]
                        filmOne[0].poster       = movie["poster"];
                        filmOne[0].plot         = movie["plot"];
                        filmOne[0].actors       = movie["actors"];
                        filmOne[0].writers      = movie["writers"];
                        filmOne[0].director     = movie["director"];
                        filmOne[0].genres       = movie["genres"];
                        filmOne[0].countries    = movie["countries"];
                        filmOne[0].runtime      = movie["runtime"];
                        filmOne[0].released     = movie["released"];
                        filmOne[0].episode      = movie["episode"];
                        filmOne[0].season       = movie["season"];
                        filmOne[0].rated        = movie["rated"];
                        filmOne[0].year         = movie["year"];
                        filmOne[0].title        = movie["title"];
                        filmOne[0].save();
                        console.log("film kayıt edildi");

                    }else{
                        console.log("film gelmedi");

                    }

                    });

                            console.log(movie);


                })
                .catch((err) => {
                    console.log(err);
                });


        }else{

            console.log("docs 0 geldi");
        }





        console.log(result['docs'][0]['sql_Id']);
    });




}
/*
__v: 0 } ],
total: 195332,
    limit: 10,
    page: 3,
    pages: 19534 }

*/
exports.getID           = getID;
exports.getFilmDetail   = getFilmDetail;