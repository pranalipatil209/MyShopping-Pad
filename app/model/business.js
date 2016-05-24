var util = require('util'),
    EventEmitter = require('events').EventEmitter,
    db = require('../database/businessSchema'),
     valid = require('../helper/validation');

function Details(){
    EventEmitter.call(this);
}
util.inherits(Details,EventEmitter);

Details.prototype.signUp = function(data,cb){
    var self = this;
    if(valid.isEmail(data.email)&& valid.isUrl(data.businessUrl)){
        var info = new db.content({
            id : data.id,
            title : data.title,
            businessUrl : data.businessUrl,
            email : data.email,
            location : data.location
        });
        info.save(function(err,data){
            if(err){
                cb(err,null);
            }else{
                cb(null,'saved successfully');
                self.emit('data saved');
            }
        });
    }
    else{
          cb('enter valid data',null);
    }
};

Details.prototype.getAll = function(cb){
    return db.content.find({},function(err,data){
        if(err){
            cb(err,null);
        }else{
            cb(null,data);
        }
    });
};

module.exports = Details;