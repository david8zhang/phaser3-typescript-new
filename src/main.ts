import Game from './scenes/Game'
import { Constants } from './utils/Constants'

const config = {
  width: Constants.WINDOW_WIDTH,
  height: Constants.WINDOW_HEIGHT,
  type: Phaser.AUTO,
  pixelArt: true,
  parent: 'phaser',
  scene: [Game],
  scale: {
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { x: 0, y: 0 },
      // debug: true,
    },
  },
  dom: {
    createContainer: true,
  },
}

new Phaser.Game(config)
