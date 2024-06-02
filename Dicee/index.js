var randomNumber1=Math.floor(Math.random()*(6-1+1)+1); //generates a random number between 1 and 6
var randomDiceImage ="dice"+ randomNumber1 +".png";

var randomImageSource ="images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0]; //selects the first image in the HTML document

image1.setAttribute("src", randomImageSource); //changes the source of the first image to the random dice image

var randomNumber2=Math.floor(Math.random()*(6-1+1)+1); //generates a random number between 1 and 6

var randomDiceImage2 ="dice"+ randomNumber2 +".png"; //generates a random dice image based on the random number generated

var randomImageSource2 ="images/" + randomDiceImage2; //generates the source of the image based on the random dice image

var image2 = document.querySelectorAll("img")[1]; //selects the second image in the HTML document

image2.setAttribute("src", randomImageSource2); //changes the source of the second image to the random dice image

if (randomNumber1 > randomNumber2) { //if player 1 wins
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) { //if player 2 wins
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else { //if it's a tie
    document.querySelector("h1").innerHTML = "Draw!";
}





