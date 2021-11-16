// jshint esversion:6
const express = require('express');

const app = express();

app.get("/" , function(req, res){
    // console.log(require);
    res.send("<h1> Hello World </h1>");
});

app.get("/contact" , function(req, res){
    res.send("Contact me at: kiranpalsingh@gmail.com");
});

app.get("/about", function(req, res){
    res.send("My name is Kiranpal Singh. I am pursuing Bachelors of Technology in Computer Science.")
})

app.get("/hobbies", function(req, res){
    res.send("<ul><li>Coffee</li><li>Coding</li></ul>")
})

app.listen(3000, function(){
    console.log("Server started on port 3000");
});


