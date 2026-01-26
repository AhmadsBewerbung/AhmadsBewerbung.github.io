import { Player } from './player.js'
import { ThirdPersonCamera } from './camera.js'
import { Weapons } from './weapons.js'
import { BuildingSystem } from './building.js'
import { EditingSystem } from './editing.js'
import { UI } from './ui.js'

const canvas = document.getElementById('game')

export const scene = new THREE.Scene()
scene.background = new THREE.Color(0x87ceeb)

export const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)

export const renderer = new THREE.WebGLRenderer({ canvas })
renderer.setSize(window.innerWidth, window.innerHeight)

const light = new THREE.DirectionalLight(0xffffff, 1)
light.position.set(5, 10, 5)
scene.add(light)

scene.add(new THREE.AmbientLight(0xffffff, 0.4))

// Ground
const ground = new THREE.Mesh(
  new THREE.BoxGeometry(200, 1, 200),
  new THREE.MeshStandardMaterial({ color: 0x3aa655 })
)
ground.position.y = -0.5
scene.add(ground)

// Systems
const player = new Player(scene)
const cameraController = new ThirdPersonCamera(camera, player)
const weapons = new Weapons(player, scene)
const building = new BuildingSystem(scene, player)
const editing = new EditingSystem(building)
const ui = new UI(player, weapons)

// Game loop
function loop() {
  requestAnimationFrame(loop)

  player.update()
  weapons.update()
  building.update()
  cameraController.update()

  renderer.render(scene, camera)
}

loop()
