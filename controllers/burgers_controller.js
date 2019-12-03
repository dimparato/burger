var express=require("express");
var burger=require("../models/burger.js");

var router=express.Router();

router.get("/", function(req, res){
    burger.showDaBurgers(function(data){
        res.render("index", {burgers: data});
    });
});

router.post("/", function(req, res) {
    burger.addDaBurger(req.body).then(function(data){
        res.render("index", {burgers: data});
    });
});

router.put("/", function(req, res) {
    burger.eatDaBurger(req.body).then(function(data){
        res.render("index", {burgers: data});
    });
});

module.exports=router;