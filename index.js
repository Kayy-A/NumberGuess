function guessNumber () {
var randomNum = Math.floor(Math.random() * 2) + 1;
  console.log(randomNum)
  var guess;
  guess = prompt("Please enter a number between 1 and 2")
  console.log("Your guess is: " + guess);
  if (guess < randomNum) {
    window.alert("Your guess is wrong. Game Over!");
  } else if (guess > randomNum) {
    window.alert("Your guess is wrong. Game Over!");
  } else if (guess == randomNum) {
    window.alert("You guessed it right. Move to Stage 2!")
  } else {
    window.alert("Error!")
  }
}