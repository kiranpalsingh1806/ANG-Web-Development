
var superheroes = require('superheroes');
var supervillain = require('supervillains');
var factful = require('factful.js');

var mySuperHero = superheroes.random();
console.log(mySuperHero);

var myVillain = supervillain.random();
console.log(myVillain);

var facts = factful.fact();
console.log(facts.all);