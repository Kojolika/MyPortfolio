import * as PIXI from 'pixi.js';
import {CRTFilter} from 'pixi-filters';

document.addEventListener('DOMContentLoaded', async (event) => {
	const app = new PIXI.Application();
	await app.init({resizeTo: window, backgroundColor: 'white'});

	document.body.appendChild(app.canvas);

	app.canvas.style.setProperty('position', 'fixed');
	app.canvas.style.setProperty('top', 0);
	app.canvas.style.setProperty('z-index', -1);

	// const texture = await PIXI.Assets.load('/media/sample.png');
	// const sprite = PIXI.Sprite.from(texture);

	// sprite.x = app.canvas.width / 2;
	// sprite.y = app.canvas.height / 2;

	const background = new PIXI.Graphics()
		.rect(0, 0, app.canvas.width, app.canvas.height)
		.fill('white');

	window.addEventListener('resize', () =>{
		background.width = app.canvas.width;
		background.height = app.canvas.height;
	});

	background.filters = new CRTFilter(
		{
			vignettingBlur: 0.2,
			vignetting: 0,
			time: 5,
		},
	);

	// since background is drawer before sprite
	// sprite is shown on top
	app.stage.addChild(background);
});
