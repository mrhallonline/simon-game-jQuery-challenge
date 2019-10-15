var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;

var randomChosenColor;
var userChosenColor;
var currentLevel = [];

//check for key press to start game
$(document).keydown(function (event) {
    if (started == false) {
        $("h1" + "#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});

// Animate button based on random number

$("." + "btn").click(function () {
    userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound();
    applyPressed(userChosenColor)
    
    // currentLevel.push(userChosenColor);
    checkAnswer(userClickedPattern.length-1);
});

//Check Answer function
function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("success");
        if (userClickedPattern.length === gamePattern.length) {

            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
        } else {
            console.log("wrong");
        }
    }


function nextSequence() {
    //toggle started variable to true so further key presses are ignored
    level++;
    userClickedPattern = []
    $("h1" + "#level-title").text("Level " + level);
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
    
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    //Play different sounds depending on color 
    playSound(randomChosenColor);
   
}


//Play sound when button is clicked similar to when randomly selected
function playSound(name) {
    
    var sound = new Audio("sounds/" + name + ".mp3");
    sound.play();
};

//Change button look when clicked on to css pressed
function applyPressed(currentColor){
    $("#"+ currentColor ).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}



