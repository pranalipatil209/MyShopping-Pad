//RegEx to validate email and URL
module.exports = {
    isEmail : function(email){
        if (email.match(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{2,6})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/)) {
            return true;
        }else {
            return false;
        }
    },
    isUrl : function(url){
        if(url.match(/(http:\/\/|https:\/\/)?(www.)?([a-zA-Z0-9]+).[a-zA-Z0-9]*.[a-z]{3}.?([a-z]+)?/)){
            return true;
        }else{
            return false;
        }
    }
};