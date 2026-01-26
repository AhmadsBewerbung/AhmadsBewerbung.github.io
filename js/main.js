import { initScene, scene, renderer } from './scene.js';
import { initPlayer, updatePlayer } from './player.js';
import { camera, updateCamera } from './camera.js';
import { input } from './input.js';
import { initUI, updateHUD } from './ui.js';
import { updateBuilding } from './building.js';
import { updateEditing } from './editing.js';

let last = 0;

function loop(t) {
  requestAnimationFrame(loop);

  const dt = (t - last) / 1000;
  last = t;

  input.update();
  updatePlayer(dt);
  updateCamera(dt);
  updateBuilding(dt);
  updateEditing(dt);
  updateHUD();

  renderer.render(scene, camera);
}

initScene();
initPlayer();   // ← THIS WAS MISSING
initUI();
requestAnimationFrame(loop);
