var express = require('express');
var app = express();
var body_parser = require('body-parser');

app.use(body_parser.urlencoded({extended : true}));

var campgrounds = [
    { name: "Granite Mountain", image: "https://images.unsplash.com/photo-1537905569824-f89f14cceb68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
    { name: "Dark Mountain", image: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
    { name: "Haunted Greens", image: "https://images.unsplash.com/photo-1470246973918-29a93221c455?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
    { name: "Granite Mountain", image: "https://images.unsplash.com/photo-1537905569824-f89f14cceb68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
    { name: "Dark Mountain", image: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
    { name: "Haunted Greens", image: "https://images.unsplash.com/photo-1470246973918-29a93221c455?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"}
];


app.get("/", function(req,res){
    res.render("landing.ejs");
});

app.get("/campgrounds", function(req,res){
    res.render("campgrounds.ejs", {"camps" : campgrounds});
})

app.post("/campgrounds", function(req,res){
    campgrounds.push({ name : req.body.name, image: req.body.image});
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req,res){
    res.render("newCampground.ejs");
})

app.listen(3000, function(){
    console.log("Server has started!!!");
});