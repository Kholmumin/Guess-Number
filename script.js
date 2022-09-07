'use strict';

let score = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');

const callMy = function (mySellector, message) {
  document.querySelector(mySellector).textContent = message;
};

checkBtn.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    callMy('.message', 'Not a number');
  } else if (guess === secretNumber) {
    callMy('.message', 'Correct Number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    callMy('.number', secretNumber);
    if (score > highScore) {
      callMy('.highscore', score);
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      callMy('.message', guess > secretNumber ? 'Too high' : 'Too low');
      score--;
      callMy('.score', score);
    } else {
      callMy('.message', '💣 You lose');
      callMy('.score', '0');
    }
  }
});

againBtn.addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  callMy('.score', score);
  document.querySelector('.guess').value = '';
  callMy('.message', 'Start guessing');
  callMy('.number', '?');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
