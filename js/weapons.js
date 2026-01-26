const THREE = window.THREE

export class Weapons {
  constructor(player, scene) {
    this.player = player
    this.scene = scene
    this.cooldown = 0
    this.current = 1

    window.addEventListener('keydown', e => {
      if (e.key >= '1' && e.key <= '3') {
        this.current = Number(e.key)
      }
    })

    window.addEventListener('mousedown', () => this.fire())
  }

  fire() {
    if (this.cooldown > 0) return
    this.cooldown = 15

    const bullet = new THREE.Mesh(
      new THREE.SphereGeometry(0.1),
      new THREE.MeshBasicMaterial({ color: 0xffff00 })
    )

    bullet.position.copy(this.player.mesh.position)
    bullet.position.y += 1.5
    this.scene.add(bullet)

    setTimeout(() => this.scene.remove(bullet), 500)
  }

  update() {
    if (this.cooldown > 0) this.cooldown--
  }
}
