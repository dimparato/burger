var express=require("express");
var burger=require("../models/burger.js");

var router=express.Router();

router.get("/", function(req, res){
    burger.showDaBurgers(function(data){
        res.render("index", {burgers: data});
    });
});

router.post("/burger", function(req, res){
    burger.addDaBurger(req.body, function(){
        res.status(200);
    }).then(function(){
        burger.showDaBurgers(function(data){
            res.render("index", {burgers: data});
        });
    });
});

router.put("/burger/:id", function(req, res){
    burger.eatDaBurger(req.params.id, function(){
        res.status(200);
    }).then(function(){
        burger.showDaBurgers(function(data){
            res.render("index", {burgers: data});
        });
    });
});

module.exports=router;