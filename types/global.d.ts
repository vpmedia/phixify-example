import { Application } from "pixi.js-legacy";
import { Game } from "phaser";

declare global {
  interface Window {
    pixiApp: Application;
    phaserApp: Game;
  }
}

export {};
