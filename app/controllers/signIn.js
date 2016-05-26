var express = require('express'),
    app = express(),
    router = express.Router(),
    signIn = require('../model/signIn'),
    sign = new signIn();

router.get('/records',function(req,res){
    sign.getAll(function(err,data){
        if(err){
            res.send(err);
        }else{
            res.send(data);
        }
    })
});

router.post('/registration',function(req,res){
    var addData = {
        mobile: req.body.mobile,
        pin: req.body.pin
    };
    sign.register(addData,function(err,data){
        if(err){
            res.send(err);
        }else{
            res.send(data);
        }
    })
});

router.post('/verification',function(req,res){
    var addData = {
        mobile: req.body.mobile,
        pin: req.body.pin,
        otp: req.body.otp
    };
    sign.verify(addData,function(err,data){
        if(err){
            res.send(err);
        }else{
            res.send(data);
        }
    })
});

module.exports = router;

