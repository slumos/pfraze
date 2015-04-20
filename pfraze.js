var spewer = require('spewer');
var _ = require('underscore');

// CC Coord Conjuncn           and,but,or
// IN Preposition              of,in,by
// JJ Adjective                big
// JJR Adj., comparative       bigger
// JJS Adj., superlative       biggest
// MD Modal                    can,should
// NN Noun, sing. or mass      dog
// NNP Proper noun, sing.      Edinburgh
// NNPS Proper noun, plural    Smiths
// NNS Noun, plural            dogs
// PDT Predeterminer           all, both
// PRP Personal pronoun        I,you,she
// PRP$ Posessive PRP          my, our
// RB Adverb                   quickly
// RBR Adverb, comparative     faster
// RBS Adverb, superlative     fastest
// RP Particle                 up,off
// VB verb, base form          eat
// VBD verb, past tense        ate
// VBG verb, gerund            eating
// VBN verb, past part         eaten
// VBP Verb, present           eat
// VBZ Verb, present           eats
// WDT Wh-determiner           which,that
// WP Wh pronoun               who,what
// WRB Wh-adverb               how,where

var pfraze_spews = [
  'NNS CC NNS VBD JJ NNS',
  'WP VBD the NNS IN',
  'VB RP IN PRP$ NN'
];

function makedAPfraze () {
  var spew = _.first(_.sample(pfraze_spews, 1));
  console.log(spew);
  return spewer.spew(spew);
}
  
_.times(10, function() {
  console.log(makedAPfraze());
});
