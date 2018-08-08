export const state = () => ({
  add: false,
  notes: []
})

export const mutations = {
  addButton (state) {
    state.add = true
  },

  addNote (state, note) {
    if (note.text !== '' || note.title !== '') {
      state.notes.push(note)
    }
  },

  deleteNote (state, index) {
    state.notes.splice(index, 1)
  }
}
