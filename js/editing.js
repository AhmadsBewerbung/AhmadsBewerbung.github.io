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
      const last = this.building.builds.pop()
      if (last) this.building.scene.remove(last)
    })
  }
}
