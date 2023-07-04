# 8-Simon-Game
Made this project with the help of jQuery involving a lot of concepts of JavaScript.

Simon game, a memory-based pattern matching game.

RULES :
1. Start: The game begins with a visual cue or instruction indicating the start of the game.
2. Pattern Display: The game displays a pattern of colors or symbols, usually accompanied by corresponding sounds. The pattern is shown for a specific duration.
3. Player's Turn: After the pattern is displayed, it's the player's turn to reproduce the pattern. The player needs to remember the sequence of colors or symbols and repeat it correctly.
4. Input: The player interacts with the game by clicking or tapping on the virtual buttons or elements that correspond to the displayed pattern. Each button or element represents a specific color or symbol.
5. Correct Reproduction: If the player reproduces the pattern correctly, the game progresses to the next level. The pattern becomes longer or more complex, testing the player's memory and concentration.
6. Incorrect Reproduction: If the player makes a mistake and reproduces the pattern incorrectly, the game ends. The player's score is usually displayed, indicating the level reached or the number of correct repetitions.
7. Restart: Players can choose to start a new game or retry the same level to improve their performance.


CODE EXPLINATION :

-> Variable Declarations:
buttonColours: An array that stores the colors available for the game buttons.
gamePattern: An empty array to store the randomly generated pattern sequence.
userClickedPattern: An empty array to store the user's pattern sequence.
started: A boolean variable to track whether the game has started or not.
level: A variable to keep track of the current level.

-> Key Press Event:
When a key is pressed (keypress event), the code checks if the game has already started (!started). If not, it sets the game level and calls the nextSequence() function to start the game.

-> Button Click Event:
When a button with the class .btn is clicked, the code executes the following steps:
Get the id of the clicked button and store it in the variable userChosenColour.
Add the userChosenColour to the userClickedPattern array.
Play the sound corresponding to the userChosenColour.
Animate the button by adding the .pressed class temporarily.
Call the checkAnswer() function to validate the user's input.

-> checkAnswer() Function:
This function is called after each user input to check if it matches the game pattern.
It takes the currentLevel as an argument, which represents the index of the current user input.
If the user's input matches the corresponding element in the gamePattern, it checks if the user has completed the current level. If so, it waits for a brief moment (setTimeout) and calls nextSequence() to proceed to the next level.
If the user's input is incorrect, it plays a "wrong" sound, adds a class to the body for a visual effect, updates the level title to indicate game over, and calls the startOver() function to reset the game.

-> nextSequence() Function:
This function is responsible for generating the next sequence in the game.
It resets the userClickedPattern array.
Increments the level variable and updates the level title accordingly.
Generates a random number between 0 and 3, selects a color from the buttonColours array based on that number, and stores it in randomChosenColour.
Adds the randomChosenColour to the gamePattern array.
Animates the button associated with randomChosenColour by briefly fading it in and out.
Plays the sound corresponding to randomChosenColour.

-> playSound() Function:
This function takes a name argument, which represents the color name.
Constructs an Audio object with the corresponding sound file path and plays it.

-> animatePress() Function:
This function animates the button by adding and removing the .pressed class.
The button associated with the currentColor is temporarily given the .pressed class for 100 milliseconds and then removed.

-> startOver() Function:
This function resets the game variables and prepares for a new game.
It sets the level to 0, clears the gamePattern array, and sets started to false.
The code combines event listeners, functions, and arrays to create the logic for the Simon game
