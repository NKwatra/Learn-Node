var express = require('express');
var app = express();
var faker = require('faker');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static("public"));

var fakeData = [];

seedData = function()
{
    for(let i =0; i<20; i++){
         var cardDetails = faker.helpers.createCard();
        personData = {};
        personData["name"] = cardDetails["name"];
        personData["email"] = cardDetails["email"];
        personData["address"] = cardDetails["address"]["streetA"] + " " + cardDetails["address"]["city"];
        fakeData.push(personData);
        }
    }       
seedData();

app.get("/", function(req,res){
    res.render("home", {"data" : fakeData});
})

app.post("/", function(req,res){
    fakeData.push({
        "name" : req.body.name,
        "email": req.body.email,
        "address": req.body.address    
    });
    res.redirect("/");
});

app.listen(8000, function(){
    console.log("Server has started!!!");
});

