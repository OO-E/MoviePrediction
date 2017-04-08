/**
 * Created by sefasaid on 08/04/2017.
 */
var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
mongoose.connect('mongodb://localhost/imdbcsv');
var limdu = require('limdu');

var Schema = mongoose.Schema;

var filmSchema = new Schema({

    color:{type:String},
    director_name : {type:String},
    num_critic_for_reviews: {type:Number},
    duration:{type:Number},
    director_facebook_likes : {type:Number},
    actor_3_facebook_likes : {type:Number},
    actor_2_name : {type:Number},
    actor_1_facebook_likes: {type:Number},
    gross:{type:Number},
    genres:{type:String},
    actor_1_name:{type:String},
    movie_title:{type:String},
    num_voted_users:{type:Number},
    cast_total_facebook_likes:{type:Number},
    actor_3_name:{type:String},
    facenumber_in_poster:{type:Number},
    plot_keywords:{type:String},
    movie_imdb_link:{type:String},
    num_user_for_reviews:{type:Number},
    language:{type:String},
    country:{type:String},
    content_rating:{type:String},
    budget:{type:Number},
    title_year:{type:Number},
    actor_2_facebook_likes:{type:Number},
    imdb_score:{type:Number},
    aspect_ratio:{type:Number},
    movie_facebook_likes:{type:Number}

}, { timestamps: { createdAt: 'created_at', updatedAt : 'updated_at' } });
filmSchema.plugin(mongoosePaginate);

var Film = mongoose.model('denemee', filmSchema);
Film.find(function (err,data) {
    if(err)
        console.log(err);
    console.log(data);
})


/*

var test = new limdu.classifiers.NeuralNetwork();
test.trainBatch([
    {input: { r: 0.03, g: 0.7, b: 0.5 }, output: 0},  // black
    {input: { r: 0.16, g: 0.09, b: 0.2 }, output: 1}, // white
    {input: { r: 0.5, g: 0.5, b: 1.0 }, output: 1}   // white
]);

console.log(test.classify({ r: 1, g: 0.4, b: 0 }));  // 0.99 - almost white

    */