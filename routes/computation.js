var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var random = Math.random()*20; 
  res.send(`Math.trunc() applied to ${random} is ${Math.trunc(random)}`);
});

router.get('/:value', function(req, res, next) {
    var random = Math.random()*20; 
    res.send(`Math.trunc() applied to ${req.params.value} is ${Math.trunc(req.params.value)}`);
  });
  

module.exports = router;