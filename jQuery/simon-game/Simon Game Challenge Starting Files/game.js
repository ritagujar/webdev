
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickPattern = []

var started = false
var level = 0 

$(document).keypress(function() {
  if (!started) {

    //3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function() {
    var userChosenColour = $(this).attr("id")
    userClickPattern.push(userChosenColour)

    playSound(userChosenColour)
    animatePress(userChosenColour)

    checkAnswer(userClickPattern.length-1)
})

function nextSequence() {

    userClickPattern = []

    level++
    $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour)

}

function playSound(name) {

  //3. Take the code we used to play sound in the nextSequence() function and add it to playSound().
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed")

    setTimeout(function() {
        $("#" + currentColor).removeClass("pressed")
    }, 100)
}

function checkAnswer(currentLevel) {
    if(gamePattern[currentLevel] === userClickPattern[currentLevel]){
      console.log("success");

      if(userClickPattern.length === gamePattern.length) {
        setTimeout(function() {
          nextSequence()
        },1000)
      }
    }
    else {
      console.log("Wrong");

      playSound("wrong")

      $("body").addClass("game-over")
      setTimeout(function() {
        $("body").removeClass("game-over")
      },200)

      $("#level-title").text("Game Over, Press any Key TO Restart")
      startOver()
    }
}

function startOver() {
  level = 0
  gamePattern = []
  started = false
}

nextSequence()
// animatePress()

