export class BuildingSystem {
  constructor(scene, player) {
    this.scene = scene
    this.player = player
    this.builds = []
    this.type = null

    window.addEventListener('keydown', e => {
      if (e.key === 'y') this.type = 'wall'
      if (e.key === 'x') this.type = 'floor'
      if (e.key === 'c') this.type = 'stair'
      if (e.key === 'v') this.type = 'cone'
    })

    window.addEventListener('mousedown', e => {
      if (!this.type) return
      this.place()
    })
  }

  place() {
    const mesh = new THREE.Mesh(
      new THREE.BoxGeometry(2,2,0.2),
      new THREE.MeshStandardMaterial({ color: 0x8b5a2b })
    )
    mesh.position.copy(this.player.mesh.position)
    mesh.position.y += 1
    this.scene.add(mesh)
    this.builds.push(mesh)
  }

  update() {}
}
