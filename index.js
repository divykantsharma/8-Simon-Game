var buttonColours=["red","blue","green","yellow"];

var gamePattern=[];
var userClickedPattern = [];

var started = false;
var level = 0;

$(document).keypress(function() {
  if (!started){
    $("#level-title").text("Level " + level);
	nextSequence();
    started = true;
  }
});

$(".btn").click(function(){
 	var userChosenColour=$(this).attr("id");
 	userClickedPattern.push(userChosenColour);

	playSound(userChosenColour);

 	animatePress(userChosenColour);

 	checkAnswer(userClickedPattern.length-1);
});


function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){
      console.log("success");
      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
      console.log("wrong");
      playSound("wrong");

      $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      $("#level-title").text("Game Over, Press Any Key to Restart");

      startOver();
    }
}


function nextSequence(){
	userClickedPattern = [];

	level++;
 	$("#level-title").text("Level "+level);

	var randomNumber=Math.floor(Math.random()*4);
	var randomChosenColour=buttonColours[randomNumber];
	gamePattern.push(randomChosenColour); 	//Add the new randomChosenColour generated to the end of the gamePattern.

	$("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100); 	// Use jQuery to select the button with the same id as the randomChosenColour

  	 playSound(randomChosenColour);
}


function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}


function animatePress(currentColor){
  $("#" + currentColor).addClass("pressed");
  setTimeout(function (){ 		//remove the pressed class after a 100 milliseconds. - setTimeout takes 2 input
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}


function startOver(){
  level = 0;
  gamePattern = [];
  started = false;
}