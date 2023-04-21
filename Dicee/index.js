var diceNumber1 = Math.floor(Math.random()*6)+1;
var imgOne = "dice"+diceNumber1+".png";
var imgSource = "images/" + imgOne;
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src",imgSource);
var diceNumber2 = Math.floor(Math.random()*6)+1;
var imgTwo = "dice"+ diceNumber2 +".png";
var img2Source = "images/" + imgTwo;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",img2Source);
if(diceNumber1>diceNumber2){
    document.querySelector("h1").innerHTML="Player 1 wins!";

}
else if(diceNumber1<diceNumber2){
    document.querySelector("h1").innerHTML= "Player 2 wins!";
}else{
    document.querySelector("h1").innerHTML= "Draw";
}

