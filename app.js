var express = require('express')
    ,router = express.Router()
    ,http = require('http')
    ,bodyParser = require('body-parser')
    ,app = express()
    ,db = require('./app/model/db')
    ,logger = require('./app/helper/logger')
    ,port = process.env.PORT || 4000;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//middleware to load controllers
app.use(require('./app/controllers'));

//create server
db.connect(function(){
    //callback when connect success
    http.createServer(app).listen(port);
    console.log("Server running at "+port+"..");
});

db.get().connection.on('connected',function(){
    logger.info('Mongoose connected '+app.port);
});

process.on('SIGINT',function(){
    db.get().connection.close(function(){
        logger.info('Mongoose connection is disconnected..');
        process.exit(0);
    });
});
