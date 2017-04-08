/**
 * Created by ozgun on 31.03.2017.
 */

var limdu = require('limdu');

var films = require('./Model/filmTwo');

var birdClassifier = new limdu.classifiers.Winnow({
    default_positive_weight: 1,
    default_negative_weight: 1,
    threshold: 0
});


var ff = new films();

films.find({},function (err,docs) {

    if(err) throw  err

    console.log(docs);



    for (var i = 0, len = docs.length; i < len; i++) {


        var ss = docs[i]["imdb_score"];
        console.log(ss + " - " + i);

    }

});



