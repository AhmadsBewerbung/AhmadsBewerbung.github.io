// js/player.js

import { scene } from './scene.js';
import { input } from './input.js';

export const player = {
  position: new THREE.Vector3(0, 1, 0),
  velocity: new THREE.Vector3(),
  speed: 8,
  sprint: 14
};

// visible low-poly player
const mesh = new THREE.Mesh(
  new THREE.BoxGeometry(1, 2, 1),
  new THREE.MeshStandardMaterial({ color: 0xdedede })
);
mesh.position.copy(player.position);
scene.add(mesh);

export function updatePlayer(dt) {
  const move = new THREE.Vector3();

  if (input.keys.w) move.z -= 1;
  if (input.keys.s) move.z += 1;
  if (input.keys.a) move.x -= 1;
  if (input.keys.d) move.x += 1;

  if (move.lengthSq() > 0) {
    move.normalize();
    const speed = input.keys.shift ? player.sprint : player.speed;
    player.position.add(move.multiplyScalar(speed * dt));
  }

  mesh.position.copy(player.position);
}
