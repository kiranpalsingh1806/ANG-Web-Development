
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var img = document.getElementById("image1");
img.src = "images/dice"+randomNumber1+".png";

var img = document.getElementById("image2");
img.src = "images/dice"+randomNumber2+".png";

var winner = document.getElementsByTagName("h1")[0];

if(randomNumber1 == randomNumber2){
    // Draw
    winner.innerHTML = "Draw!";
}
else if(randomNumber1 > randomNumber2){
    // One wins
    winner.innerHTML = "🚩Player 1 Wins";
}
else{
    // Two wins
    winner.innerHTML = "Player 2 Wins🚩";
}