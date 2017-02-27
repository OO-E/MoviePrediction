/**
 * Created by ozgun on 24.02.2017.
 *
 *
 */


var request = require('request'); // İstek yapmak için kullanılacak paket.
var cheerio = require('cheerio'); // Getirilen veriyi parçalamak için kullanılacak paket.



var count = 0;

function getData(startYear,maxYear,page) {

    var url = 'http://www.imdb.com/search/title?sort=moviemeter,asc&title_type=documentary&year='+startYear+'&page='+page+'&ref_=adv_nxt';

    var page = page;
    var startYear = startYear;
    var maxYear = maxYear;

    request(url, function (error, response, html) {

        if ( ! error && response.statusCode == 200) {

            var $ = cheerio.load(html);

            /* $('div.ribbonize').each(function(i, element){

             // console.log($(this).attr('data-tconst'));
             });*/
            var lenght = $('div.ribbonize').length
            if(lenght != 0){

                console.log("page "+page);
                count = count + lenght;
                page = page + 1;
                getData(startYear,maxYear,page);

            }else{
                startYear = startYear + 1;

                if(startYear <= maxYear){
                    page = 1;
                    getData(startYear,maxYear,page)

                    console.log("Bu yılda "+ startYear +" toplam " + count + " data oldu ");

                }else{

                    //bitti
                    console.log("Toplama işlemi bitti. toplam " + count + " data oldu ");

                }

            }

        }
    });



}



//getData(1910,1910,1);

