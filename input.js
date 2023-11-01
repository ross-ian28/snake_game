let inputDirecetion = { x: 0, y: 0 };
let lastInputDirection = { x: 0, y: 0 }

window.addEventListener('keydown', e => {
	switch (e.key) {
		case 'ArrowUp':
			// Snake can't go up if already going down
			if (lastInputDirection.y !== 0) break
			inputDirecetion = { x: 0, y: -1 };
			break;
		case 'ArrowDown':
			if (lastInputDirection.y !== 0) break
			inputDirecetion = { x: 0, y: 1 };
			break;
		case 'ArrowLeft':
			if (lastInputDirection.x !== 0) break
			inputDirecetion = { x: -1, y: 0 };
			break;
		case 'ArrowRight':
			if (lastInputDirection.x !== 0) break
			inputDirecetion = { x: 1, y: 0 };
			break;
	}
})

export function getInputDirection() {
	lastInputDirection = inputDirecetion;
  return inputDirecetion;
}

