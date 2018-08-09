export const state = () => ({
  add: false,
  notes: []
})

export const mutations = {
  initializeState (state) {
    console.log('Initializing state')

    if (process.browser) {
      const tempNote = JSON.parse(localStorage.getItem('keep_note')).notes
      console.log(tempNote)
      state.notes = tempNote
    }
  },

  addButton (state) {
    state.add = true
  },

  addNote (state, note) {
    if (note.text !== '' || note.title !== '') {
      state.notes.push(note)
    }
    localStorage.setItem('keep_note', JSON.stringify(state))
  },

  deleteNote (state, index) {
    state.notes.splice(index, 1)
    localStorage.setItem('keep_note', JSON.stringify(state))
  }
}
