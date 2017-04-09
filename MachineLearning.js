/**
 * Created by ozgun on 31.03.2017.
 */

var DN2A = require("dn2a");
var films = require('./Model/filmTwo');



var ff = new films();
var array = [];
var count = 0;
films.find({},function (err,docs) {

    if(err) throw  err
    var count = docs.length;
    for(var i = 0; i < 100;i++){
        addToTrain(docs[i]);
    }

    console.log("sayı =",array.length);
    console.log("tahmin edilen data ",docs[0]["imdb_score"]);
    neuralNetwork(docs[0]);
});





function neuralNetwork(input){
    // Instantiation
    var neuralNetwork = new DN2A.NetworkAlpha();
// Training
    var trainingdata = array;
    neuralNetwork.train(trainingdata);

// Querying

    var data = [[
        input.num_critic_for_reviews,
        input.duration,
        input.director_facebook_likes,
        input.actor_3_facebook_likes,
        input.actor_1_facebook_likes,
        input.gross,
        input.num_voted_users,
        input.cast_total_facebook_likes,
        input.facenumber_in_poster,
        input.num_user_for_reviews,
        input.budget,
        input.title_year,
        input.actor_2_facebook_likes,
        input.aspect_ratio,
        input.movie_facebook_likes]];

    neuralNetwork.query(data, function(queryingStatus) {

        data.forEach(function(inputPatten, inputPatternIndex) {
            console.log("[" + data[inputPatternIndex].join(", ") + "] => " +
                "[" + queryingStatus.outputPatterns[inputPatternIndex].join(", ") + "]");
            neural2(data);
        });
    });

}

function neural2(data) {
    count++;

    var neuralNetwork = new DN2A.NetworkAlpha();
    neuralNetwork.query(data, function(queryingStatus) {

        data.forEach(function(inputPatten, inputPatternIndex) {
            console.log("[" + queryingStatus.outputPatterns[inputPatternIndex].join(", ") + "]");
            //console.log(queryingStatus);
            if(count <= 1){

                neural2(data);
            }

        });
    });

}





function addToTrain(input) {

    var imdb = input.imdb_score;
   /*
    var addedData = {num_critic_for_reviews:input.num_critic_for_reviews

        ,duration : input.duration,
        director_facebook_likes:input.director_facebook_likes,
        actor_3_facebook_likes:input.actor_3_facebook_likes,
        actor_1_facebook_likes: input.actor_1_facebook_likes,
        gross : input.gross,
        num_voted_users: input.num_voted_users,
        cast_total_facebook_likes: input.cast_total_facebook_likes,
        facenumber_in_poster: input.facenumber_in_poster,
        num_user_for_reviews : input.num_user_for_reviews,
        budget: input.budget,
        title_year : input.title_year,
        actor_2_facebook_likes : input.actor_2_facebook_likes,
        aspect_ratio: input.aspect_ratio,
        movie_facebook_likes:input.movie_facebook_likes};
*/
    var addedData = [
        input.num_critic_for_reviews,
        input.duration,
        input.director_facebook_likes,
        input.actor_3_facebook_likes,
        input.actor_1_facebook_likes,
        input.gross,
        input.num_voted_users,
        input.cast_total_facebook_likes,
        input.facenumber_in_poster,
        input.num_user_for_reviews,
        input.budget,
        input.title_year,
        input.actor_2_facebook_likes,
        input.aspect_ratio,
        input.movie_facebook_likes];

    var data = {input : addedData, output : [imdb]};
    array.push(data);
}

/*
function addToBatch(array,input) {


    net.train(array,{
        errorThresh: 0.005,  // error threshold to reach
        iterations: 100,   // maximum training iterations
        log: true,           // console.log() progress periodically
        logPeriod: 10,       // number of iterations between logging
        learningRate: 0.3    // learning rate
    });


    var output = net.run(data);
    console.log(output);
}
*/