export class Player {
  constructor(scene) {
    this.speed = 0.15
    this.velocityY = 0
    this.health = 100

    this.mesh = new THREE.Group()

    const body = new THREE.Mesh(
      new THREE.BoxGeometry(1,1.5,0.5),
      new THREE.MeshStandardMaterial({ color: 0x4fa3ff })
    )
    body.position.y = 1

    const head = new THREE.Mesh(
      new THREE.BoxGeometry(0.8,0.8,0.8),
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
    let moveX = 0
    let moveZ = 0

    if (this.keys['w']) moveZ--
    if (this.keys['s']) moveZ++
    if (this.keys['a']) moveX--
    if (this.keys['d']) moveX++

    this.mesh.position.x += moveX * this.speed
    this.mesh.position.z += moveZ * this.speed

    if (this.mesh.position.y > 0) {
      this.velocityY -= 0.01
    } else {
      this.velocityY = 0
      this.mesh.position.y = 0
    }

    if (this.keys[' '] && this.mesh.position.y === 0) {
      this.velocityY = 0.25
    }

    this.mesh.position.y += this.velocityY
  }
}
