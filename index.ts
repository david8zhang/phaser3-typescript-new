import Phaser from 'phaser'
import * as spine from '@esotericsoftware/spine-phaser'

class SpineDemo extends Phaser.Scene {
  preload() {}

  create() {}
}

const config = {
  width: 800,
  height: 600,
  type: Phaser.WEBGL,
  scene: [SpineDemo],
  plugins: {
    scene: [{ key: 'spine.SpinePlugin', plugin: spine.SpinePlugin, mapping: 'spine' }],
  },
}

new Phaser.Game(config)
