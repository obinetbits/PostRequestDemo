var express = require("express");
var app = express();

app.set ("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
});

app.post("/addfriend", function(req, res) {
    res.send("You have hit the post request");
});

app.get("/friends", function(req, res){
    var friends = ["Tony", "Miranda", "Justin", "Pierre", "Lily"];
    res.render("friends", {friends: friends});
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server Started!!!"); 
});