const THREE = window.THREE

export class ThirdPersonCamera {
  constructor(camera, player) {
    this.camera = camera
    this.player = player
    this.rotation = { x: 0, y: 0 }

    document.addEventListener('mousemove', e => {
      this.rotation.y -= e.movementX * 0.002
      this.rotation.x -= e.movementY * 0.002
      this.rotation.x = Math.max(-1.2, Math.min(1.2, this.rotation.x))
    })
  }

  update() {
    const offset = new THREE.Vector3(
      Math.sin(this.rotation.y) * 6,
      3 + this.rotation.x * 2,
      Math.cos(this.rotation.y) * 6
    )

    this.camera.position.copy(this.player.mesh.position).add(offset)
    this.camera.lookAt(this.player.mesh.position)
  }
}
