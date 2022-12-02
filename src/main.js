import "./style.css";
import { Spector } from "spectorjs";
import { getPhaserApp } from "./phaser/getPhaserApp.js";
import { getPixiApp } from "./pixi/getPixiApp.js";

window.spector = new Spector();
window.spector.displayUI();
window.pixiApp = getPixiApp();
window.phaserApp = getPhaserApp();
