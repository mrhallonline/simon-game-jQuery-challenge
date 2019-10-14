var gamePattern= gamePattern.push(randomChosenColor);
var buttonColors = ["red","blue","green", "yellow"];

var randomChosenColor;
    if (randomNumber===0){
        randomChosenColor=buttonColors[0];
    } else if (randomNumber===1){
        randomChosenColor=buttonColors[1];
    } else if (randomNumber===2){
        randomChosenColor=buttonColors[2];
    } else {
        randomChosenColor=buttonColors[3];
    }

function nextSequence() {
    var randomNumber = Math.floor(Math.random()*4);
    return randomNumber;
}