var mongo = require('mongo')
    ,db = require('./db')
    ,util = require('util')
    ,EventEmitter = require('events').EventEmitter;

var id = 0;
var categoryList = [
    {
        id: id++,
        name: "AUTOMOTIVE",
        subCategory: {
            name1: "Engine",
            name2: "Engine 1",
            name3: "Engine 2"
        }
    },
    {
        id: id++,
        name: "REAL ESTATE",
        subCategory: {
            name1: "Plot",
            name2: "Block 1",
            name3: "Plot 2"
        }
    },
    {
        id: id++,
        name:"RETAIL",
        subCategory:{
            name1:"Electronics",
            name2:"Sample 1",
            name3:"Sample 2"
        }
    }];

function category(){
    EventEmitter.call(this);
}
util.inherits(category, EventEmitter);

//GET categories in JSON format
category.prototype.categoryInfo = function(){
    return categoryList;
};

//GET categories by Id
category.prototype.categoryByid = function(data){
    console.log(data);
    var para = data.split(',');
    var result = [];
    for(var i=0; i < para.length; i++){
        for(var j=0; j<categoryList.length; j++){
            if(para[i] == categoryList[j].id){
                result.push(categoryList[j]);
            }
        }
    }
    return result;
};

module.exports = category;







