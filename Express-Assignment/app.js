var express = require('express');
var app = express();

app.get("/", function(req,res){
    res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res){
    var animal = req.params["animal"];
    switch(animal)
    {
        case "pig": res.send("The pig says 'Oink'");
        case "cow": res.send("The cow says 'Moo'");
        case "dog": res.send("The dog says 'Woof Woof!'");
        default: res.send("Sorry, page not found... What are you doing with your life?");
    }
});

app.get("/repeat/:msg/:times", function(req,res){
    var msg = req.params["msg"];
    var times = parseInt(req.params["times"]);
    var responseString = "";
    for(var i =0; i< times; i++)
        responseString += msg + " ";
    res.send(responseString);    
});

app.get("*", function(req,res){
    res.send("Sorry, page not found... What are you doing with your life?");
});

app.listen(8000, function(){
    console.log("server has started");
});