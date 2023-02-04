//Dice 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage1 =  "C:\\Users\\amuly\\Desktop\\programming\\web\\learning\\Dice game\\images\\dice" + randomNumber1 + ".png";
var image1 = document.querySelector(".img1");
image1.setAttribute("src" , randomDiceImage1);


//Dice 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 =  "C:\\Users\\amuly\\Desktop\\programming\\web\\learning\\Dice game\\images\\dice" + randomNumber2 + ".png";
var image2 = document.querySelector(".img2");
image2.setAttribute("src" , randomDiceImage2);


if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="🚩Player 1 WINS!";
}
else if(randomNumber1 == randomNumber2){
    document.querySelector("h1").innerHTML="DRAW!";
}
else{
    document.querySelector("h1").innerHTML="Player 2 WINS!🚩";
}
