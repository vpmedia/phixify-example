import { Game, AUTO } from "phaser";

function preload() {
  this.load.pack(
    "phaser_resource",
    "asset/single_project_single_bundle/phaser_resource.json",
    "main"
  );
}

function create() {
  this.add.image(0, 0, "bg");
}

export function getPhaserApp() {
  const app = new Game({
    type: AUTO,
    parent: "phaser-container",
    width: 400,
    height: 300,
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
