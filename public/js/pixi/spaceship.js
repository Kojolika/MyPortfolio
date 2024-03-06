import * as PIXI from 'pixi.js';

document.addEventListener('DOMContentLoaded', (event) => {
  const app = new PIXI.Application({width: 640, height: 360});
  document.body.appendChild(app.view);

  const sprite = PIXI.Sprite.from('../../views/sample.png');
  app.stage.addChild(sprite);

  let elapsed = 0.0;

  // Tell our application's ticker to run a new callback every frame, passing
  // in the amount of time that has passed since the last tick
  app.ticker.add((delta) => {
    elapsed += delta;
    sprite.x = 100.0 + Math.cos(elapsed / 50.0) * 100.0;
  });
});
