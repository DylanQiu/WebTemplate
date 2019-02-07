var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment");
});

app.get("/speak/:animal", function(req, res){
    var animal = req.params.animal.toLowerCase();
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof!",
        cat: "Mia"
        // undefined: "Nothing"
    }
    var sound = sounds[animal];

    res.send("This " + animal + " says " + sound);
});

app.listen(8000, function(){
    console.log("Now serving your app!");
});
