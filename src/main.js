import FontFaceObserver from 'fontfaceobserver';
import { getPhaserApp } from './phaser/getPhaserApp.js';
import { getPixiApp } from './pixi/getPixiApp.js';
import './style.css';
// import { Spector } from "spectorjs";

// window.spector = new Spector();
// window.spector.displayUI();

await new FontFaceObserver('Lineal').load();
globalThis.pixiApp = await getPixiApp();
globalThis.phaserApp = getPhaserApp();
