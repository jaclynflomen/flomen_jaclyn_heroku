var express = require('express');
var router = express.Router();

var connect = require('../utils/sqlConnect');

/* GET home page. */
router.get('/', function(req, res, next) {
  //do a database query and get some of the hero data
  connect.query(`SELECT brand, name, image, description, features FROM product`, (err, result) => {
    if (err) {
      throw err;
      console.log(err);
    }else{
      console.log(result);
      res.render('index', { images: result });
    }
  });
});


module.exports = router;
