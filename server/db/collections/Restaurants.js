var bookshelf = require('..schema.js').bookshelf;
var Restaurant = require('/..models/Restaurant.js');

var Restaurants = new bookshelf.collection();
Restaurants.model = Restaurant;
module.exports = Restaurants;
