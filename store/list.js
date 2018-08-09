export const state = () => ({
  add: false,
  notes: [] // notes = [ [{ 'text': Task, 'title': Title, 'done': false },...] ]
})

export const mutations = {
  initializeState (state) {
    console.log('Initializing state')

    if (process.browser) {
      const tempNote = JSON.parse(localStorage.getItem('keep_list')).notes
      state.notes = tempNote
    }
  },

  addButton (state) {
    state.add = true
  },
  addNote (state, note) {
    state.notes.push(note)
    console.log('Item added to local storage')
    localStorage.setItem('keep_list', JSON.stringify(state))
  },
  removeNote (state, index) {
    state.notes.splice(index, 1)
    console.log('Item removed to local storage')
    localStorage.setItem('keep_list', JSON.stringify(state))
  }
}
