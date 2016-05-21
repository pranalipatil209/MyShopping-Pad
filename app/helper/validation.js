var jwt = require('jsonwebtoken');

//RegEx to validate email and URL
module.exports = {
    isEmail : function(email){
        if(email.match(/^(([a-zA-Z]|[0-9])|([-]|[_]|[.]))+[@](([a-zA-Z0-9])|([-])){2,63}[.](([a-zA-Z0-9]){2,63})+$/)){
            return true;
        }else {
            return false;
        }
    },
    isUrl : function(url){
        if(url.match(/(((ftp|http|https):\/\/)|(\/)|(..\/))(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/)){
            return true;
        }else{
            return false;
        }
    }
};