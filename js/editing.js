export class EditingSystem {
  constructor(building) {
    this.building = building
    this.active = false

    window.addEventListener('keydown', e => {
      if (e.key.toLowerCase() === 'q') {
        this.active = !this.active
      }
    })

    window.addEventListener('mousedown', () => {
      if (!this.active) return
      if (this.building.builds.length === 0) return

      const piece = this.building.builds.pop()
      this.building.scene.remove(piece)
    })
  }
}
