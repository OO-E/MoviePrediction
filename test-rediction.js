/**
 * Created by sefasaid on 08/04/2017.
 */
var mongoose = require("mongoose");
// mongo connection
mongoose.connect("mongodb://localhost:27017/imdbcsv");

var limdu = require('limdu');

var test = new limdu.classifiers.NeuralNetwork();
test.trainBatch([
    {input: { r: 0.03, g: 0.7, b: 0.5 }, output: 0},  // black
    {input: { r: 0.16, g: 0.09, b: 0.2 }, output: 1}, // white
    {input: { r: 0.5, g: 0.5, b: 1.0 }, output: 1}   // white
]);

console.log(test.classify({ r: 1, g: 0.4, b: 0 }));  // 0.99 - almost white