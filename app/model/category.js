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

function Category(){
    EventEmitter.call(this);
}
util.inherits(Category, EventEmitter);

//GET categories in JSON format
Category.prototype.categoryInfo = function(){
    return categoryList;
};

//GET categories by Id
//@param: array
//return: category list by id
//TODO:: conditions for null
Category.prototype.categoryById = function(data) {
    var self = this;
    console.log(data);
    var param = data.split(',');
    var result = [];
    for (var i = 0; i < param.length; i++) {
        for (var j = 0; j < categoryList.length; j++) {
            if (param[i] == categoryList[j].id) {
                result.push(categoryList[j]);
            }
        }
    }
    self.emit('data retrieved successfully');
    return result;
};

module.exports =Category;







