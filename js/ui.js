let editing = false;

export function updateEditing() {
  if (input.keys.q) editing = true;
  if (!editing) return;

  // Simple delete on click
  if (input.keys.mouse0) {
    const last = scene.children.pop();
    if (last) scene.remove(last);
  }
}
