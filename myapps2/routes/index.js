var express = require('express');
var detailModel = require('../modules/details');
var router = express.Router();
var detail = detailModel.find({"needAndSupplier":"supply"});
/* GET home page. */
router.get('/', function(req, res, next) {
  detail.exec(function(err, data){
    
    
    res.render('index', { title: 'Details', records: data});
    console.log(data);
  });
});

module.exports = router;

