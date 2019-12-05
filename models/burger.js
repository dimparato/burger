var orm=require("../config/orm.js");

var burgerFuncs={
    showDaBurgers: function(burgers){
        orm.selectAll(function(res){
            burgers(res);
        });
    },
    addDaBurger: function(burger, cb){
        orm.insertOne(burger, function(res){
            cb(res);
        });
    },
    eatDaBurger: function(id, cb){
        orm.updateOne(id, function(res){
            cb(res);
        });
    }
};

module.exports=burgerFuncs;