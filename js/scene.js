export let scene, renderer;

export function initScene() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x87a6ff);

  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(10, 20, 10);
  scene.add(light);

  scene.add(new THREE.AmbientLight(0xffffff, 0.4));

  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(500, 500),
    new THREE.MeshStandardMaterial({ color: 0x3a9d23 })
  );
  ground.rotation.x = -Math.PI / 2;
  scene.add(ground);

  renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('game'),
    antialias: true
  });
  renderer.setSize(window.innerWidth, window.innerHeight);

  window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}
