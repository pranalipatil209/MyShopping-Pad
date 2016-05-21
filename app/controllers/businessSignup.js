var express = require('express'),
    app = express(),
    router = express.Router(),
    businessSignup = require('../model/business'),
    business = new businessSignup();

router.get('/records',function(req,res){
   business.getAll(function(err,data){
        if(err){
            res.send(err);
        }else{
            res.send(data);
        }
   })
});

router.post('/signUp',function(req,res){
    var addData = {
        id : req.body.id,
        title : req.body.title,
        businessUrl : req.body.businessUrl,
        email : req.body.email,
        location : req.body.location
    }
    business.signUp(addData,function(err,data){
        if(err){
            res.send(err);
        }else{
            res.send(data);
        }
    })
});

module.exports = router;





