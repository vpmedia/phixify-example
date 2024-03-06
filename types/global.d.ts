import { Game } from "phaser";
import { Application } from "pixi.js";

declare global {
  interface Window {
    pixiApp: Application;
    phaserApp: Game;
  }
}

export { };

