const builds = [];
let currentType = 'wall';

const materials = {
  wood: new THREE.MeshStandardMaterial({ color: 0x9b6b3d })
};

export function updateBuilding() {
  if (input.keys.y) currentType = 'wall';
  if (input.keys.x) currentType = 'floor';

  if (input.keys.mouse0) {
    placeBuild();
  }
}

function placeBuild() {
  const geo = currentType === 'wall'
    ? new THREE.BoxGeometry(3, 3, 0.3)
    : new THREE.BoxGeometry(3, 0.3, 3);

  const mesh = new THREE.Mesh(geo, materials.wood);
  mesh.position
    .copy(player.position)
    .divideScalar(3)
    .floor()
    .multiplyScalar(3);

  scene.add(mesh);
  builds.push(mesh);
}
