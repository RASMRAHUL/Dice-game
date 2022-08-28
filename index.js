let randomnumber1 = Math.ceil(Math.random()*6);
let randomDiceImage1 = "dice" +randomnumber1 + ".png";
let randomImageSource1 = "images/" + randomDiceImage1 ;
document.querySelectorAll("img")[0].setAttribute("src",randomImageSource1); 
let randomnumber2 = Math.ceil(Math.random()*6);
let randomDiceImage2 = "dice" +randomnumber2 + ".png";
let randomImageSource2 = "images/" + randomDiceImage2 ;
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2); 
// Player 1 wins
if(randomnumber1 > randomnumber2)
{
    document.querySelector("h1").innerHTML ="🚩Player 1 Wins!";
}
//Player 2 wins
else if(randomnumber1 < randomnumber2)
{
    document.querySelector("h1").innerHTML ="Player 2 Wins!🚩";
}
else{
    document.querySelector("h1").innerHTML ="Draw!";
} 