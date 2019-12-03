var orm=require("../config/orm.js");

var burgerFuncs={
    showDaBurgers: function(burgers){
        orm.selectAll(function(res){
            burgers(res);
        });
    },
    addDaBurger: function(burger){
        orm.insertOne(burger).then(function(burgers){
            orm.selectAll(function(res){
                burgers(res);
            });
        });
    },
    eatDaBurger: function(id){
        orm.updateOne(id).then(function(burgers){
            orm.selectAll(function(res){
                burgers(res);
            });
        });
    },
};

module.exports=burgerFuncs;