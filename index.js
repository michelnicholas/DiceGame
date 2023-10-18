var random = Math.floor(Math.random() * 6) + 1
var randonDiceImage =  "dice"  + random + ".png"
var randomImageSource = "images/" + randonDiceImage

var image1 = document.querySelectorAll("img")[0]
image1.setAttribute("src",randomImageSource)

var random2 = Math.floor(Math.random() * 6) + 1
var randomImageSource2 = "images/dice" + random2 + ".png"

var image2 = document.querySelectorAll("img")[1]
image2.setAttribute("src" , randomImageSource2)

if(random > random2){
    document.querySelector("h1"). innerHTML = "Congrats Player 1 is the Winner"
} else if (random2 > random){
    document.querySelector("h1"). innerHTML = "Congrats Player 2 is the Winner"
}else {
    document.querySelector("h1").innerHTML = "Draw!"
}