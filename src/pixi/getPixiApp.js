import { Application, Assets, Sprite } from "pixi.js-legacy";
import { sound } from "@pixi/sound";

async function preload() {
  await Assets.init({
    manifest: "asset/single_project_single_bundle/pixi_resource.json",
  });
  const assets = await Assets.loadBundle("main");
  create(assets);
}

function create(assets) {
  const app = window.pixiApp;
  const bg = new Sprite(assets.bg);
  app.stage.addChild(bg);
}

export function getPixiApp() {
  const app = new Application({
    width: 400,
    height: 300,
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
