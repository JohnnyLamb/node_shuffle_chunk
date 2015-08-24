var express = require('express');
var router = express.Router();


  router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Shuffle Chunk'
  });
});

router.post('/', function(req, res, next) {
  var people = req.body.people.split(',');
  var number = req.body.number;
  var shuffled = shuffleChunk(people,number);

  res.render('index', {title:"Shuffle Chunk",results:shuffled});

});



function shuffle(array) {
  var counter = array.length,
    temp, index;
  while (counter > 0) {
    index = Math.floor(Math.random() * counter);
    counter--;
    temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
  return array;
}

function chunk(shuffledArray, size) {
  var chunks = [],
    i = 0,
    n = shuffledArray.length,
    num = n / size;
  while (i < n) {
    chunks.push(shuffledArray.slice(i, i += num));
  }
  return chunks;
}

function shuffleChunk(inputArray, num) {
  var shuffledArray = shuffle(inputArray);
  return chunk(shuffledArray, num);
}

module.exports = router;
