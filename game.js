var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var randomChosenColor;


function nextSequence() {
    // return randomNumber;
    var randomNumber = Math.floor(Math.random() * 4);
    // turn randomNumber into random color add color to game Pattern
    if (randomNumber === 0) {
        randomChosenColor = buttonColors[0];
        gamePattern.push(randomChosenColor);
    } else if (randomNumber === 1) {
        randomChosenColor = buttonColors[1];
        gamePattern.push(randomChosenColor);
    } else if (randomNumber === 2) {
        randomChosenColor = buttonColors[2];
        gamePattern.push(randomChosenColor);
    } else {
        randomChosenColor = buttonColors[3];
        gamePattern.push(randomChosenColor);
        
    }
    
}
nextSequence();
// Animate button based on random number
$("#" + randomChosenColor).fadeOut().fadeIn();

var sound = new Audio(randomChosenColor + ".mp3");
sound.play();

