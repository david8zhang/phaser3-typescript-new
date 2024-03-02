import Phaser from 'phaser'

export default class Game extends Phaser.Scene {
  preload() {}

  create() {
    this.add.text(100, 100, 'Hello there')
  }
}
