export const input = {
  keys: {},
  update() {}
};

window.addEventListener('keydown', e => input.keys[e.key.toLowerCase()] = true);
window.addEventListener('keyup', e => input.keys[e.key.toLowerCase()] = false);
