var express = require('express')
    ,app = express()
    ,router = express.Router();

router.use('/registration',require('./registration.js'));
router.use('/business',require('./businessSignup.js'));
router.use('/login',require('./signIn.js'));

router.get('/',function(req,res){
    res.send('This is main controller!');
});

module.exports = router;