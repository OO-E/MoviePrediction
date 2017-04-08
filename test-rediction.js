/**
 * Created by sefasaid on 08/04/2017.
 */
var mongoose = require("mongoose");
// mongo connection
mongoose.connect("mongodb://localhost:27017/imdbcsv");
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    console.log("Connected correctly to server");
});

