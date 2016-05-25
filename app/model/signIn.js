var util = require('util'),
    EventEmitter = require('events').EventEmitter,
    db = require('../database/businessSchema'),
    valid = require('../helper/validation');

//constructor
function SignIn(){
    EventEmitter.call(this);
}
util.inherits(SignIn,EventEmitter);

SignIn.prototype.register = function(data,cb){
    var self = this;
    if(valid.isMobile(data.mobile)){
        db.user.findOne({mobile:data.mobile}, function(error,exist){
            if(exist){
                cb('Number already exist',null);
            }else{
                //setTimeout(function(send){
                //    var otp = (Math.floor(Math.random() * 90000)+100000);
                //    cb(null,{otp:otp});
                    var info = db.user({
                        mobile: data.mobile,
                        pin: data.pin,
                        otp: otp
                    });
                    info.save(function(error,data){
                        if(error){
                            cb(error,null);
                        }else{
                            cb(null,'saved successfully');
                            self.emit('data saved');
                        }
                    });
                //}, 100)
            }
        })
    }else{
        cb('Incorrect mobile number',null);
    }
};

SignIn.prototype.verify = function(data,cb){
    var self = this;
    if(valid.isMobile(data.mobile)){
        db.user.findOne({mobile:data.mobile,pin:data.pin,otp:data.otp},function(error,exist){
            if(exist){
                db.user.update({mobile:data.mobile,pin:data.pin,otp:data.otp},{$set:{otp:0}},function(error,data){
                    if(error){
                        cb(error,null);
                    }else{
                        cb(null,'Registered successfully!');
                    }
                })
            }else{
                cb('no data found',null);
            }
        })
    }else{
        cb('Incorrect Mobile number or OTP');
    }
};

exports.module = SignIn;