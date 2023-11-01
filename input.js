let inputDirecetion = { x: 0, y: 0};

window.addEventListener('keydown', e => {
	switch (e.key) {
		case 'ArrowUp':
			inputDirecetion = { x: 0, y: -1 };
			break;
		case 'ArrowDown':
			inputDirecetion = { x: 0, y: 1 };
			break;
		case 'ArrowLeft':
			inputDirecetion = { x: -1, y: 0 };
			break;
		case 'ArrowRight':
			inputDirecetion = { x: 1, y: 0 };
			break;
	}
})

export function getInputDirection() {
  return inputDirecetion;
}

