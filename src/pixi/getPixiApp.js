import { Application } from "pixi.js-legacy";

export function getPixiApp() {
  const pixiApp = new Application({
    width: 400,
    height: 300,
    resolution: 1,
    backgroundColor: 0x1099bb,
    hello: true,
  });
  document.getElementById("pixi-container").appendChild(pixiApp.view);
  return pixiApp;
}
