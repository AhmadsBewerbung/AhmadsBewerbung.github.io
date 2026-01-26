export class BotManager {
  constructor(scene, player) {
    this.bots = []

    for (let i = 0; i < 3; i++) {
      const bot = new THREE.Mesh(
        new THREE.BoxGeometry(1,2,1),
        new THREE.MeshStandardMaterial({ color: 0xff4444 })
      )
      bot.position.set(Math.random()*10,0,Math.random()*10)
      scene.add(bot)
      this.bots.push(bot)
    }

    this.player = player
  }

  update() {
    this.bots.forEach(bot => {
      const dir = this.player.mesh.position.clone().sub(bot.position).normalize()
      bot.position.add(dir.multiplyScalar(0.02))
    })
  }
}
