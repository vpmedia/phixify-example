import "./style.css";
import { Spector } from "spectorjs";
import FontFaceObserver from "fontfaceobserver";
import { getPhaserApp } from "./phaser/getPhaserApp.js";
import { getPixiApp } from "./pixi/getPixiApp.js";

window.spector = new Spector();
window.spector.displayUI();

new FontFaceObserver("Lineal").load().then(() => {
  window.pixiApp = getPixiApp();
  window.phaserApp = getPhaserApp();
});
