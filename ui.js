export class UI {
  constructor(player, weapons) {
    const ui = document.getElementById('ui')

    const hud = document.createElement('div')
    hud.className = 'hud'
    ui.appendChild(hud)

    setInterval(() => {
      hud.innerHTML = `
        ❤️ Health: ${player.health}<br>
        🔫 Weapon: ${weapons.current}
      `
    }, 100)
  }
}
