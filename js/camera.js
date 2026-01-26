export const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.set(0, 4, 6);

export function updateCamera(dt) {
  const target = player.position.clone().add(new THREE.Vector3(0, 2, 0));
  camera.position.lerp(
    target.clone().add(new THREE.Vector3(0, 3, 6)),
    0.1
  );
  camera.lookAt(target);
}
