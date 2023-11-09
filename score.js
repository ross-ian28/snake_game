import { getSnakeLength } from "./snake.js";

let score = 0;
let highScore = 0;
const scoreDisplay = document.getElementById('score');
const highScoreDisplay = document.getElementById('highScore');
const HIGH_SCORE_KEY = "highscore";

export function update() {
	score = getSnakeLength();
  scoreDisplay.textContent = `Score: ${score}`;
}

export function draw() {
  scoreDisplay.textContent = `Score: ${score}`;
}

export function updateHighScore() {
  highScore = Number(localStorage.getItem(HIGH_SCORE_KEY))

  if(score > highScore) {
    localStorage.setItem(HIGH_SCORE_KEY, score)
    highScore = score;
  }
  highScoreDisplay.textContent = `HighScore: ${highScore}`;
}

export function drawHighScore() {
  highScoreDisplay.textContent = `HighScore: ${highScore}`;
}