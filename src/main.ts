import * as PIXI from 'pixi.js';

let app = new PIXI.Application({ width: 640, height: 360 });
document.body.appendChild(app.view);

let sprite = PIXI.Sprite.from('./images/tree.png', { width: 100, heigh: 100 });
app.stage.addChild(sprite);

let elapsed = 0.0;
app.ticker.add((delta) => {
  elapsed += delta;
  sprite.x = 100.0 + Math.cos(elapsed / 50.0) * 100.0;
});


/* 
  x = window.withd
  y = window.height
  canvas.size (x, y)

  for (i in 10) 
    const plant = new Plant(randomPointInMap())
    app.stage.addChild(plant);
*/
