import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection } from './snake.js';
import { update as updateFood, draw as drawFood } from './food.js';
import { outsideGrid } from './grid.js';
import { update as updateScore, draw as drawScore, updateHighScore, drawHighScore } from './score.js';

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById('game-board');

function main(currentTime) {
	if (gameOver) {
		updateHighScore();
		if (confirm('You lost. Press ok to restart.')) {
			window.location = '/';
		}
		return
	}

	window.requestAnimationFrame(main)
	const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
	if (secondsSinceLastRender < 1 / SNAKE_SPEED) return

	lastRenderTime = currentTime; 

	update();
	draw();
}

window.requestAnimationFrame(main)

function update() {
	updateSnake();
	updateFood();
	updateHighScore();
	updateScore();
	checkDeath();
} 

function draw() {
	gameBoard.innerHTML = '';
	drawSnake(gameBoard);
	drawFood(gameBoard);
	drawScore();
	drawHighScore();
}

function checkDeath() {
	gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}
