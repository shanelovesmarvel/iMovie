var monk = require('monk');
var wrap = require('co-monk');
var mongo = monk('localhost/travel');

var collection_user = wrap(mongo.get('user'));
var collection_movies_in_cinemas = wrap(mongo.get('cinemas'));
var collection_movies_on_laptop = wrap(mongo.get('laptop'));

mongo.users = collection_user;
mongo.moviesInCinemas = collection_movies_in_cinemas;
mongo.moviesOnLaptop = collection_movies_on_laptop;

module.exports = mongo;