import { Game, AUTO } from "phaser";

function preload() {
  this.load.pack(
    "phaser_resource",
    "asset/single_project_single_bundle/phaser_resource.json",
    "main"
  );
}

function create() {
  console.log("Phaser cache", this.cache);
  // image
  const bg = this.add.image(0, 0, "bg");
  bg.setOrigin(0.5, 0.5);
  bg.x = 320;
  bg.y = 240;
  // audio sprite
  const audioSprite = this.game.sound.addAudioSprite("audiosprite1");
  // sound
  const sound = this.game.sound.add("hitWall");
  // button
  const button = this.add.image(0, 0, "cat");
  button.setOrigin(0.5, 0.5);
  button.x = 320;
  button.y = 400;
  button.setInteractive({ cursor: "pointer" });
  button.on("pointerup", () => {
    audioSprite.play("impactLight1");
    setTimeout(() => {
      sound.play();
    }, 500);
  });
  // text
  const textStyle = { fontFamily: "Arial", fontSize: 16, color: "#FFFFFF" };
  this.add.text(20, 20, "Hello Phaser", textStyle);
  // sprite sheet
  this.anims.create({
    key: "spritesheet1",
    frames: this.anims.generateFrameNames("spritesheet1", {
      prefix: "frame",
      end: 6,
      zeroPad: 0,
    }),
    frameRate: 12,
    repeat: -1,
  });
  const spriteSheet = this.add.sprite(0, 0, "spritesheet1");
  spriteSheet.setOrigin(0.5, 0.5);
  spriteSheet.x = bg.x;
  spriteSheet.y = bg.y;
  spriteSheet.play("spritesheet1");
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
