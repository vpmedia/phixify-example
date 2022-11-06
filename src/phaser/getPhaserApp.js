import { Game, AUTO } from "phaser";

function preload() {
  this.load.pack(
    "phaser_resource",
    "asset/single_project_single_bundle/phaser_resource.json",
    "main"
  );
}

function create() {
  const bg = this.add.image(0, 0, "bg");
  bg.setOrigin(0.5, 0.5);
  bg.x = 320;
  bg.y = 240;
}

export function getPhaserApp() {
  const app = new Game({
    type: AUTO,
    parent: "phaser-container",
    width: 640,
    height: 480,
    backgroundColor: "#000000",
    banner: true,
    antialiasGL: false,
    transparent: false,
    autoRound: true,
    roundPixels: true,
    disableContextMenu: true,
    scene: {
      preload,
      create,
    },
  });
  return app;
}
