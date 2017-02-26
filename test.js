/**
 * Created by ozgun on 24.02.2017.
 *
 *
 */

var curl = require("curl");

class Human {

    constructor(name,surname){
    console.log("name",name);
    console.log("surname",surname);

    }
}

class Student extends Human{
/* sebebi ne ??
    var ss = function (asd,asd) {

}
*/


    constructor(name, age, id) {
        // always initialize all instance properties
        super("özgün","ergen");

        this.name = name;
        this.age = age;
        this.id = id;

    }
    getStudentName() {
        return this.name;
    }
    getStudentAge() {
        return this.age;
    }
  static getStudentId() {

        console.log("get student ıd");

    }
}



function test() {
    var ss = 1;
    var aaa = new String();


    this.connection = function (port, version) {
        console.log(port);
        console.log(version);

    }

}


var ss = new Student("özgün",19,19);
console.log(ss.getStudentAge());
console.log(ss.getStudentName());
console.log(ss.name);


var sss = new test();
sss.aaa = "deneme";
sss.connection(10,20);

console.log(sss.aaa);

Student.getStudentId();
/*
curl.get("http://www.imdb.com/search/title?sort=moviemeter,asc&title_type=documentary&year=1910&page=1&ref_=adv_nxt", function(err, response, body) {
var value = JSON.parse(body);
console.log(body);

});
*/


var request = require('request'); // İstek yapmak için kullanılacak paket.
var cheerio = require('cheerio'); // Getirilen veriyi parçalamak için kullanılacak paket.

request('http://www.imdb.com/search/title?sort=moviemeter,asc&title_type=documentary&year=1910&page=1000&ref_=adv_nxt', function (error, response, html) {
    if ( ! error && response.statusCode == 200) {

        var $ = cheerio.load(html);
//berkaytest
        $('div.ribbonize').each(function(i, element){

            console.log($(this).attr('data-tconst'));
        });
    }
});


