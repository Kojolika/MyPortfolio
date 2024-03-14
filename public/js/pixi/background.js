import * as PIXI from 'pixi.js';
import '@pixi/gif';
import {KawaseBlurFilter, ReflectionFilter} from 'pixi-filters';

document.addEventListener('DOMContentLoaded', async (event) => {
	const app = new PIXI.Application();
	await app.init({backgroundColor: 'white'});

	document.body.appendChild(app.canvas);

	app.canvas.style.setProperty('position', 'fixed');
	app.canvas.style.setProperty('top', 0);
	app.canvas.style.setProperty('z-index', -1);

	const gif = await PIXI.Assets.load('media/city.gif');

	app.stage.addChild(gif);

	setCanvasToViewportSize(app.canvas);

	window.addEventListener('resize', () => setCanvasToViewportSize(app.canvas));

	// gif.animationSpeed = 0.5;
	gif.width = app.canvas.width;
	gif.height = app.canvas.height;

	app.stage.filters = [
/* 		new ReflectionFilter({
			boundary: 0.25,
		}), */
		new KawaseBlurFilter({
			quality: 5,
		}),
	];
});

/**
 *
 * @param {HTMLCanvasElement} canvas
 * @param {PIXI.Container} background
 */
function setCanvasToViewportSize(canvas) {
	canvas.style.setProperty('height', '100vh');
	canvas.style.setProperty('width', '100vw');
}
