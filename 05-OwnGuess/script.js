'use strict';
// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "🎉🎉Correct Number";
// document.querySelector(".number").textContent = 19;
// document.querySelector(".score").textContent = 30;
function random() {
  const min = 1; // minimum value
  const max = 20; // maximum value
  const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomInt;
}
let numberToBeGuessed = random();
// console.log(document.querySelector(".counter").value);
document.querySelector('.check').addEventListener('click', function () {
  const entry = document.querySelector('.counter').value;
  if (parseInt(document.querySelector('.score').textContent) <= 0) {
    document.querySelector('.message').textContent = 'You lost!!';
    event.stopPropagation();
    console.log('a');
  } else {
    if (entry > numberToBeGuessed) {
      document.querySelector('.message').textContent =
        '📈 the number is too high';
      document.querySelector('.score').textContent -= 1;
    } else if (entry < numberToBeGuessed) {
      document.querySelector('.message').textContent =
        '📉 the number is too low';
      document.querySelector('.score').textContent -= 1;
    } else {
      document.querySelector('.message').textContent = '🎉🎉Awesome!!';
      if (
        parseInt(document.querySelector('.score').textContent) >=
        parseInt(document.querySelector('.highScore').textContent)
      ) {
        document.querySelector('.highScore').textContent =
          document.querySelector('.score').textContent;
        document.documentElement.style.backgroundColor = '#23e91f';
        document.querySelector('.number').textContent = numberToBeGuessed;
      }
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.score').textContent = 20;
  document.documentElement.style.backgroundColor = '#000000e0';
  document.querySelector('.number').textContent = '?';
  numberToBeGuessed = random();
});
