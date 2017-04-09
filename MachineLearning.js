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
    var xArray = [];
    console.log("Bağlantı sağladı");
    for (var i = 0, len = docs.length; i < len; i++) {


            var ss = docs[i]["imdb_score"];
            xArray.push({input: docs[i], output: ss});

    }
    console.log("Bağlantı 1",xArray.length);
    var colorClassifier = new limdu.classifiers.NeuralNetwork();
    colorClassifier.trainBatch(xArray);

    console.log(colorClassifier.classify({input:docs[0],output:docs[0]["imdb_score"]}));

});






