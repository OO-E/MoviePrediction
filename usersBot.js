/**
 * Created by sefasaid on 13/03/2017.
 */

var request             = require('request'); // İstek yapmak için kullanılacak paket.
var cheerio             = require('cheerio'); // Getirilen veriyi parçalamak için kullanılacak paket.
var botIds          = require('./Model/botUsersId');
var botUsersSetting      = require('./Model/botUsersSetting');