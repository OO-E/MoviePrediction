/**
 * Created by ozgun on 24.02.2017.
 *
 *
 */
/*
var curl = require("curl");

class Human {

    constructor(name,surname){
    console.log("name",name);
    console.log("surname",surname);

    }
}
*/
/*
class Student extends Human{
// sebebi ne ??
//    var ss = function (asd,asd) {

//}



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
*/

/*
curl.get("http://www.imdb.com/search/title?sort=moviemeter,asc&title_type=documentary&year=1910&page=1&ref_=adv_nxt", function(err, response, body) {
var value = JSON.parse(body);
console.log(body);

});
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

/*
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/admin');
var db = mongoose.connection;


db.on('error',console.error.bind(console,"connection error"))
db.once('open',function () {

    console.log("connection open");

})

var Schema = mongoose.Schema;

var personSchema = new Schema({
    name:String,
    surname:String
})
*/
/*
var person = new personModel({
    name:"özgün",
    surname:"ergen"

})
person.save(function (error) {
    if(error){
        console.log(error);

    }else{
        console.log("kayıt eklendi");

    }
})
*/


var model = require("./Model/Mongo/Model/Models.js")
model.Film({id:"1",title:"deneme"}).save(function (error) {

    if(error){
        console.log(error);
    }else{
        console.log("ok oldu");

    }

})

mongoose.connection.close();

//getData(1910,1910,1);

