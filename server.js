var exphbs=require("express-handlebars");
var express=require("express");
var router=require("./controllers/burgers_controller.js");

var app=express();

var PORT=process.env.PORT || 8080;

app.use(express.static("./public"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use("/", router);

app.listen(PORT, function(){
    console.log("App listening on PORT: "+PORT);
});