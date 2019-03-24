var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png-dice6.png

var randomImageSource = "img/" + randomDiceImage ; //img/dice1- img/dice6 

var image1 = document.querySelectorAll("img")[0];
   
// document.querySelectorAll("img")[0];

 image1.setAttribute("src", randomImageSource); 



 var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6

// var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png-dice6.png

var randomImageSource2 = "img/dice" + randomNumber2 + ".png" ; //img/dice1- img/dice6 

 document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
   
// document.querySelectorAll("img")[0];

 // image1.setAttribute("src", randomImageSource); 

// IF Player 1 wins
 if (randomNumber1 > randomNumber2) {
 	document.querySelector("h1").innerHTML = "Player 1 Wins";
 }
 else if (randomNumber2 > randomNumber1) {
 	document.querySelector("h1").innerHTML = "Play 2 Wins";
 }
 else {
 	document.querySelector("h1 ").innerHTML = "Draw";
 }