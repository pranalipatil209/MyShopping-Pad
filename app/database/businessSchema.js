var mongoose = require('mongoose');

var id = 0;
var details = mongoose.Schema({
    id:{
        type: Number,
        index:{
            unique:true
        }
    },
    title:{
       type:String
   },
    businessUrl:{
        type:String
    },
    email:{
        type:String
    },
    location:{
        type:String
    }
});

var content = mongoose.model('content',details,'content');
exports.content = content;

var User = mongoose.Schema({
    mobile:{
        type: String,
        required : true
    },
    pin:{
        type: Number,
        required : true
    },
    otp:{
        type: Number
    },
    syncTime:{
        type: Date,
        Default: Date.now,
        require: true
    }
});

var user = mongoose.model('user',User,'user');
exports.user = user;

