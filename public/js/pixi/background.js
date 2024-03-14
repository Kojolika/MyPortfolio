import * as PIXI from 'pixi.js';
import { CRTFilter } from 'pixi-filters';

document.addEventListener('DOMContentLoaded', async (event) => {
	const app = new PIXI.Application();
	await app.init({ backgroundColor: 'white' });

	document.body.appendChild(app.canvas);

	app.canvas.style.setProperty('position', 'fixed');
	app.canvas.style.setProperty('top', 0);
	app.canvas.style.setProperty('z-index', -1);

	const background = new PIXI.Graphics()
		.rect(0, 0, app.canvas.width, app.canvas.height)
		.fill('white');

	background.alpha = 0.75;

	SetCanvasToViewportSize(app.canvas, background);

	window.addEventListener('resize', () => SetCanvasToViewportSize(app.canvas, background));

	background.filters = [
		new CRTFilter({
			vignettingBlur: 0.2,
			vignetting: 0,
			time: 5,
		},)
	];

	//app.stage.addChild(background);
});

/**
 * 
 * @param {HTMLCanvasElement} canvas 
 * @param {PIXI.Container} background 
 */
function SetCanvasToViewportSize(canvas, background) {
	canvas.style.setProperty('height', '100vh');
	canvas.style.setProperty('width', '100vw');
	background.width = canvas.width;
	background.height = canvas.height;
}