import {
  Application,
  Assets,
  AnimatedSprite,
  Sprite,
  Text,
  TextStyle,
} from "pixi.js-legacy";
import { sound } from "@pixi/sound";

async function preload() {
  await Assets.init({
    manifest: "asset/single_project_single_bundle/pixi_resource.json",
  });
  const assets = await Assets.loadBundle("main");
  create(assets);
}

function create(assets) {
  console.log("Pixi assets", assets);
  const app = window.pixiApp;
  // image
  const bg = new Sprite(assets.bg);
  app.stage.addChild(bg);
  bg.anchor.set(0.5, 0.5);
  bg.x = 320;
  bg.y = 240;
  // sound
  const sound = assets.hitWall;
  // button
  const button = new Sprite(assets.cat);
  app.stage.addChild(button);
  button.anchor.set(0.5, 0.5);
  button.x = 320;
  button.y = 400;
  button.interactive = true;
  button.cursor = "pointer";
  button.on("pointerup", () => {
    sound.play();
  });
  // text
  const textStyle = new TextStyle({
    fontFamily: "Arial",
    fontSize: 16,
    fill: "#FFFFFF",
  });
  const text = new Text("Hello Pixi.js", textStyle);
  app.stage.addChild(text);
  text.x = 20;
  text.y = 20;
  // sprite sheet
  const ss = new AnimatedSprite(Object.values(assets.spritesheet1.textures));
  app.stage.addChild(ss);
  ss.anchor.set(0.5, 0.5);
  ss.x = bg.x;
  ss.y = bg.y;
  ss.animationSpeed = 0.2;
  ss.play();
}

export function getPixiApp() {
  const app = new Application({
    width: 640,
    height: 480,
    resolution: 1,
    backgroundColor: 0x000000,
    hello: true,
  });
  document.getElementById("pixi-container").appendChild(app.view);
  if (!sound.supported) {
    // suppress eslint import not used warning but active plugin
    console.warn("Sound is not supported.");
  }
  setTimeout(preload, 1);
  return app;
}
