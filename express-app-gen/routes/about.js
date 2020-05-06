var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('about', {
    misdatos: {
      name: 'Fernando Torres',
      age: '41',
      country: 'México',
      city: 'CDMX'
    }
   });
});

module.exports = router;
