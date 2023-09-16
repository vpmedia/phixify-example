import './style.css';
import FontFaceObserver from 'fontfaceobserver';
import { getPhaserApp } from './phaser/getPhaserApp.js';
import { getPixiApp } from './pixi/getPixiApp.js';
// import { Spector } from "spectorjs";

// window.spector = new Spector();
// window.spector.displayUI();

new FontFaceObserver('Lineal').load().then(() => {
  window.pixiApp = getPixiApp();
  window.phaserApp = getPhaserApp();
});
