var express = require('express')
    ,app = express()
    ,router = express.Router()
    ,event = require('events').EventEmitter
    ,categoryInfo = require('../model/category')
    ,categories = new categoryInfo();

//return all categories
router.get('/categories',function(req,res){
    res.send(categories.categoryInfo());
});

//return categoried by Id
router.get('/categories/:id',function(req,res){
   var Id = req.params.id;
    res.send(categories.categoryByid(Id));
});

module.exports = router;
