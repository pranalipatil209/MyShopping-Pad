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
                process.nextTick(function(send){
                    var otp = (Math.floor(Math.random() * 90000)+100000);
                    cb(null,{otp:otp});
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
                })
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
                        cb(null,'Registration successfull!');
                        self.emit('registration completed');
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

SignIn.prototype.getAll = function(cb){
    return db.user.find({},function(err,data){
        if(err){
            cb(err,null);
        }else{
            cb(null,data);
        }
    });
};

module.exports = SignIn;