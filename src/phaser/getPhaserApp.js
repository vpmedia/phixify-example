import { AUTO, Game, Scene } from 'phaser';

class MainScene extends Scene {
  /**
   * TBD.
   */
  preload() {
    this.load.pack('phaser_resource', 'asset/single_project_single_bundle/phaser_resource.json', 'main');
  }

  /**
   * TBD.
   */
  create() {
    console.log('Phaser cache', this.cache);
    // image
    const bg = this.add.image(320, 240, 'bg');
    bg.setOrigin(0.5, 0.5);
    const rainbow = this.add.image(320, 100, 'rainbow');
    rainbow.setOrigin(0.5, 0.5);
    // audio sprite
    const audioSprite = this.game.sound.addAudioSprite('audiosprite1');
    // sound
    const sound = this.game.sound.add('hitWall');
    // button
    const button = this.add.image(320, 400, 'cat');
    button.setOrigin(0.5, 0.5);
    button.setInteractive({ cursor: 'pointer' });
    button.on('pointerup', () => {
      audioSprite.play('impactLight1');
      setTimeout(() => {
        sound.play();
      }, 500);
    });
    // text
    const textStyle = { fontFamily: 'Lineal', fontSize: 24, color: '#FFFFFF' };
    this.add.text(20, 20, 'Hello Phaser', textStyle);
    // bitmap text
    const bitmapText = this.add.bitmapText(320, 100, 'desyrel', 'Bitmap Text', 32);
    bitmapText.setOrigin(0.5, 0.5);
    // sprite sheet
    this.anims.create({
      key: 'spritesheet1',
      frames: this.anims.generateFrameNames('spritesheet1', {
        prefix: 'frame',
        end: 6,
        zeroPad: 0,
      }),
      frameRate: 12,
      repeat: -1,
    });
    const spriteSheet = this.add.sprite(bg.x, bg.y, 'spritesheet1');
    spriteSheet.setOrigin(0.5, 0.5);
    spriteSheet.play('spritesheet1');
    // sprite sheet multi resolution
    const spriteSheet2 = this.add.sprite(bg.x, bg.y + 80, 'spritesheet2', 'babar-pym-wait');
    spriteSheet2.setOrigin(0.5, 0.5);
  }
}

/**
 * TBD.
 * @returns {Game} TBD.
 */
export function getPhaserApp() {
  const app = new Game({
    type: AUTO,
    parent: 'phaser-container',
    width: 640,
    height: 480,
    backgroundColor: '#000000',
    banner: true,
    antialiasGL: false,
    transparent: false,
    autoRound: true,
    roundPixels: true,
    disableContextMenu: true,
    scene: MainScene,
  });
  return app;
}
