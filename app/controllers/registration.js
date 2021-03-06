//dependancies
var express = require('express')
    ,app = express()
    ,router = express.Router()
    ,event = require('events').EventEmitter
    ,categoryInfo = require('../model/category')
    ,categories = new categoryInfo();

//return all categories
router.get('/categories/list',function(req,res){
    res.send(categories.categoryInfo());
});

//return categories by Id
router.get('/categories/:id',function(req,res){
   var Id = req.params.id;
    if(!Id){
        res.send('id is missing');
        console.log('Id is null');
    }
    else{
        res.send(categories.categoryById(Id));
    }
});

module.exports = router;
