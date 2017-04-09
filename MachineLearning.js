/**
 * Created by ozgun on 31.03.2017.
 */

var DN2A = require("dn2a");
var films = require('./Model/filmTwo');



var ff = new films();
var array = [];
films.find({},function (err,docs) {

    if(err) throw  err
    var count = docs.length;
    for(var i = 1; i < docs.length;i++){
        array.push({input:docs[i],output:docs[i]["imdb_score"]});
    }

    console.log("sayı =",array.length);
    console.log("tahmin edilen data ",docs[0]["imdb_score"]);

    neuralNetwork(array,docs[0]);
});





function neuralNetwork(trainingData,predicateData){
    // Instantiation
    var neuralNetwork = new DN2A.NetworkAlpha();

// Training
    var trainingPatterns = [
       trainingData
    ];
    neuralNetwork.train(trainingPatterns);

// Querying
    var inputPatterns = [
        predicateData
    ];
    neuralNetwork.query(inputPatterns, function(queryingStatus) {
        inputPatterns.forEach(function(inputPatten, inputPatternIndex) {
            console.log("[" + inputPatterns[inputPatternIndex].join(", ") + "] => [" + queryingStatus.outputPatterns[inputPatternIndex].join(", ") + "]");
        });
    });



}

