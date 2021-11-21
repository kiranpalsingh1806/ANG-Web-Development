// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const { request } = require("express");

const app = express();
app.set("view engine", "ejs");

let items = ["But Food", "Cook Food", "Eat Food"];
let workItems = [];


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/", function(req, res) {
    var day = "";
    var today = new Date();

    var options = {
        weekday : "long",
        day: "numeric",
        month: "long"
    };

    var day = today.toLocaleDateString("en-US", options);
    var currentDay = today.getDay();
    res.render("list", {listTitle: day, newListItems: items});
});

app.post("/", function(req, res) {

    let item = req.body.newItem;

    if(req.body.list == "Work") {
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }
    
})

app.get("/work", function(req, res){
    res.render("list",{listTitle: "Work List", newListItems:workItems});
})

app.post("/work", function(req,res) {
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
})

app.get("/about", function(req, res) {
    res.render('about');
})

app.listen(3000, function(req, res) {
    console.log("Server is running on port 3000");
})