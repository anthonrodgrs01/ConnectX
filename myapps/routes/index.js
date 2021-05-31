var express = require('express');
var detailModel = require('../modules/details');
var router = express.Router();
var detail = detailModel.find({});
/* GET home page. */
router.get('/', function(req, res, next) {
  detail.exec(function(err, data){
    if(err) throw err;
    res.render('index', { title: 'Details', records: data});
    console.log(data);
  });
});

module.exports = router;