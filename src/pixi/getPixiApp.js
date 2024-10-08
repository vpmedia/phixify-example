import { sound } from '@pixi/sound';
import { AnimatedSprite, Application, Assets, BitmapText, Sprite, Text, TextStyle } from 'pixi.js';

/**
 * TBD.
 */
async function preload() {
  await Assets.init({
    manifest: 'asset/single_project_single_bundle/pixi_resource.json',
    texturePreference: {
      resolution: 1,
    },
  });
  const assets = await Assets.loadBundle('main');
  create(assets);
}

/**
 * TBD.
 * @param {object} assets - TBD.
 */
function create(assets) {
  console.log('Pixi assets', assets);
  const app = globalThis.pixiApp;
  // image
  const bg = new Sprite(assets.bg);
  app.stage.addChild(bg);
  bg.anchor.set(0.5, 0.5);
  bg.x = 320;
  bg.y = 240;
  const rainbow = new Sprite(assets.rainbow);
  app.stage.addChild(rainbow);
  rainbow.anchor.set(0.5, 0.5);
  rainbow.x = 320;
  rainbow.y = 100;
  // audio sprite
  const audioSprite = assets.audiosprite1;
  audioSprite.addSprites(assets.audiosprite1_data.spritemap);
  // sound
  const sound = assets.hitWall;
  // button
  const button = new Sprite(assets.cat);
  app.stage.addChild(button);
  button.anchor.set(0.5, 0.5);
  button.x = 320;
  button.y = 400;
  button.eventMode = 'static';
  button.cursor = 'pointer';
  button.on('pointerup', () => {
    audioSprite.play('impactLight1');
    setTimeout(() => {
      sound.play();
    }, 500);
  });
  // text
  const textStyle = new TextStyle({
    fontFamily: 'Lineal',
    fontSize: 24,
    fill: '#FFFFFF',
  });
  const text = new Text({ text: 'Hello Pixi.js', style: textStyle });
  app.stage.addChild(text);
  text.x = 20;
  text.y = 20;
  //
  const bitmapText = new BitmapText({
    text: 'Bitmap Text',
    style: {
      fontFamily: 'desyrel',
      fontSize: 32,
    },
  });
  bitmapText.x = 320;
  bitmapText.y = 100;
  bitmapText.anchor.set(0.5, 0.5);
  app.stage.addChild(bitmapText);
  // sprite sheet
  const spriteSheet = new AnimatedSprite(Object.values(assets.spritesheet1.textures));
  app.stage.addChild(spriteSheet);
  spriteSheet.anchor.set(0.5, 0.5);
  spriteSheet.x = bg.x;
  spriteSheet.y = bg.y;
  spriteSheet.animationSpeed = 0.2;
  spriteSheet.play();
  // sprite sheet multi resolution
  const spriteSheet2 = new Sprite(Object.values(assets.spritesheet2.textures)[0]);
  app.stage.addChild(spriteSheet2);
  spriteSheet2.anchor.set(0.5, 0.5);
  spriteSheet2.x = bg.x;
  spriteSheet2.y = bg.y + 80;
  spriteSheet2.scale = 0.5;
  console.log(spriteSheet2);
}

/**
 * TBD.
 * @returns {Promise<Application>} TBD.
 */
export async function getPixiApp() {
  const app = new Application();
  const config = {
    width: 640,
    height: 480,
    resolution: 1,
    backgroundColor: 0x000000,
    hello: true,
  };
  // app.renderer = await autoDetectRenderer(config);
  await app.init(config);
  document.getElementById('pixi-container').appendChild(app.canvas);
  if (!sound.supported) {
    // suppress eslint import not used warning but activate plugin
    console.warn('Sound is not supported.');
  }
  setTimeout(preload, 1);
  return app;
}
