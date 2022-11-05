import { Game, AUTO } from "phaser";

export function getPhaserApp() {
  const phaserApp = new Game({
    type: AUTO,
    parent: "phaser-container",
    width: 400,
    height: 300,
    backgroundColor: "#204466",
    banner: true,
    antialiasGL: false,
    transparent: false,
    autoRound: true,
    roundPixels: true,
    disableContextMenu: true,
  });
  return phaserApp;
}
