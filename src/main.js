import "./style.css";
import { getPhaserApp } from "./phaser/getPhaserApp.js";
import { getPixiApp } from "./pixi/getPixiApp.js";

window.pixiApp = getPixiApp();
window.phaserApp = getPhaserApp();
