export const state = () => ({
  add: false,
  notes: []
})

export const mutations = {
  addButton (state) {
    state.add = true
  },
  addNote (state, note) {
    state.notes.push(note)
  },
  removeNote (state, index) {
    state.notes.splice(index, 1)
  }
}
