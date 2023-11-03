import { getSnakeLength } from "./snake.js";

let score = 0;
const scoreDisplay = document.getElementById('score');
const HIGH_SCORE_KEY = "highscore";

export function update() {
	score = getSnakeLength();
  scoreDisplay.textContent = `Score: ${score}`;
}

export function draw() {
  scoreDisplay.textContent = `Score: ${score}`;
  console.log('Score drawn:', scoreDisplay.textContent);

}