const ui = document.getElementById('ui-root');

export function initUI() {
  ui.innerHTML = `
    <div class="menu">
      <h2>Ahmads Bewerbung</h2>
      <button onclick="location.reload()">Play</button>
      <button>Controls</button>
      <button>Settings</button>
    </div>

    <div class="hud">
      HP: 100<br />
      Wood: ∞
    </div>

    <div class="easter">
      Diese Arbeiter haben immer noch nicht geantwortet.
    </div>
  `;
}

export function updateHUD() {}
