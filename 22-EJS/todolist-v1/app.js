// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const { request } = require("express");

const app = express();
app.set("view engine", "ejs");

var items = ["But Food", "Cook Food", "Eat Food"];

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

    res.render("list", {kindOfDay: day, newListItems: items});
});

app.post("/", function(req, res) {
    var item = req.body.newItem;
    items.push(item);
    res.redirect("/");
})

app.listen(3000, function(req, res) {
    console.log("Server is running on port 3000");
})