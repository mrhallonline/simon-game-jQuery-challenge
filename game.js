var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var randomChosenColor;
var userChosenColor;
var userClickedPattern=[];

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
//call function
nextSequence();
// Animate button based on random number
$("#" + randomChosenColor).fadeOut().fadeIn();
//Play different sounds depending on color 
var sound = new Audio("sounds/" + randomChosenColor + ".mp3");
sound.play();

//Play sound when button is clicked similar to when randomly selected
function playSound (name){
    name=userChosenColor
    var sound2 = new Audio("sounds/" + name + ".mp3");
    sound2.play();
};

//Change CSS value to animate button when pressed
// function animatePress(){
    
// };


//Check for button clicks
$("." + "btn").click(function() {
    userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound();
    $(this).addClass("pressed");
    setTimeout(function(){
        $("." + "btn").removeClass("pressed");
    }, 100);
});


