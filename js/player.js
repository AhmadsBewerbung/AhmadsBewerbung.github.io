const THREE = window.THREE

export class Player {
  constructor(scene) {
    this.mesh = new THREE.Group()
    this.speed = 0.15
    this.velocityY = 0
    this.health = 100

    const body = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1.5, 0.5),
      new THREE.MeshStandardMaterial({ color: 0x4fa3ff })
    )
    body.position.y = 1

    const head = new THREE.Mesh(
      new THREE.BoxGeometry(0.8, 0.8, 0.8),
      new THREE.MeshStandardMaterial({ color: 0xffccaa })
    )
    head.position.y = 2.2

    this.mesh.add(body, head)
    scene.add(this.mesh)

    this.keys = {}
    window.addEventListener('keydown', e => this.keys[e.key.toLowerCase()] = true)
    window.addEventListener('keyup', e => this.keys[e.key.toLowerCase()] = false)
  }

  update() {
    let x = 0
    let z = 0
    if (this.keys.w) z--
    if (this.keys.s) z++
    if (this.keys.a) x--
    if (this.keys.d) x++

    this.mesh.position.x += x * this.speed
    this.mesh.position.z += z * this.speed
  }
}
