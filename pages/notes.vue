<template>
    <v-container fluid>
        <!--<v-slide-y-transition mode="out-in">-->
        <v-layout row>
            <v-layout column align-center>
                <v-input class="input">
                    <input
                            class="title"
                            type="text"
                            placeholder="Title"
                            v-if="add"
                            v-model="current_title"
                    >
                    <textarea
                            placeholder="Take a note"
                            v-model="current_text"
                            @click="addText"
                            style="width: 100%"
                    ></textarea>
                </v-input>
            </v-layout>
        </v-layout>
        <v-layout
                row
                v-on:click="addText"
                v-on:click_outside="removeAdd"
        >
            <v-layout row>
                <v-layout column align-center>
                    <v-btn
                            v-if="add"
                            v-on:click="addItem"
                    >
                        Add
                    </v-btn>
                </v-layout>
            </v-layout>

        </v-layout>

        <v-layout>
            <v-card
                    height = "200px"
                    width = "150px"
                    v-for="(note, index) in notes"
                    :key=index
            >
                <h2>{{ note.title }}</h2>
                <p>{{note.text}}</p>
                <v-btn
                        text-right
                        color="error"
                        v-on:click="deleteItem(index)"
                >
                    Delete
                </v-btn>
            </v-card>
        </v-layout>

        <!--</v-slide-y-transition>-->
    </v-container>
</template>

<script>
  // import * as noteStore from '~/store/notes.js'
  // import { mapMutations } from 'vuex'
  import { mapState, mapMutations } from 'vuex'

  export default {
    data () {
      return {
        current_text: '',
        current_title: ''
      }
    },
    computed: mapState({
      add: state => state.notes.add,
      notes: state => state.notes.notes
    }),
    methods: {
      ...mapMutations({
        addText: 'notes/addButton',
        addNote: 'notes/addNote',
        deleteNote: 'notes/deleteNote'
      }),

      removeAdd: function () {
        this.add = false
      },

      addItem () {
        this.addNote({'title': this.current_title, 'text': this.current_text})
        this.current_title = ''
        this.current_text = ''
      },

      deleteItem (index) {
        this.deleteNote(index)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
    .input {
        background-color: lightyellow;
        height: 50px;
        width: 50%;
    }
</style>
