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
                            placeholder="Take a list"
                            v-model="current_text"
                            v-on:click="displayAddButton"
                            v-on:keyup.13="addItem"
                            style="width: 100%"
                    ></textarea>
                </v-input>
            </v-layout>
        </v-layout>
        <v-layout
                row
                v-on:click_outside="removeAddButton"
        >
            <v-layout row>
                <v-layout column align-center>
                    <v-btn
                            v-if="add"
                            v-on:click="addList"
                    >
                        Add
                    </v-btn>
                </v-layout>
            </v-layout>

        </v-layout>

        <v-layout>
            <v-card
                    v-if="!isCurrentListempty"
                    height = "200px"
                    width = "150px"
            >
                <ul>
                    <li v-for="item in current_list.note">
                        <h3 >
                            <input type="checkbox">{{ item.text }}
                        </h3>
                    </li>
                </ul>
            </v-card>
        </v-layout>

        <v-layout>
            <v-card
                    height = "200px"
                    width = "150px"
                    v-for="(note, index) in notes"
                    :key = index
            >

                <h2>{{ note.title }}</h2>
                <h3 v-for="item in note.note">
                    <input type="checkbox" v-model="item.done" > <strike v-if="item.done">{{item.text}}</strike> <span v-else>{{item.text}}</span>
                </h3>
                <v-btn
                        color="error"
                        v-on:click="removeNote(index)"
                >
                    Delete
                </v-btn>
            </v-card>
        </v-layout>

        <!--</v-slide-y-transition>-->
    </v-container>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'

  export default {
    data () {
      return {
        current_text: '',
        current_title: '',
        current_item: '',

        current_list: {
          'title': '',
          'note': []
        }
      }
    },
    created () {
      this.$store.commit('list/initializeState')
    },
    methods: {
      ...mapMutations({
        displayAddButton: 'list/addButton',
        addNote: 'list/addNote',
        removeNote: 'list/removeNote'
      }),

      removeAddButton: function () {
        this.add = false
      },

      addItem: function () {
        if (this.current_text.trim().length > 0) {
          this.current_list.note.push({
            text: this.current_text,
            done: false
          })
        }

        this.current_text = ''

        console.log(this.current_list)
      },

      addList () {
        console.log('In add List')
        if (this.current_text.length > 0) {
          console.log('current text exists')
          this.current_list.note.push({
            'text': this.current_text,
            'done': false
          })
          console.log('pushing done')
          this.current_list.title = this.current_title
        }
        if (this.current_list.note.length > 0) {
          console.log('Current list not empty')
          this.addNote(this.current_list)
          this.current_list = {
            'title': '',
            'note': []
          }
        }
        this.current_text = ''
        this.current_title = ''
      }
    },
    computed: {
      isCurrentListempty: function () {
        if (this.current_list.note.length > 0) {
          return false
        } else {
          return true
        }
      },

      ...mapState({
        add: state => state.list.add,
        notes: state => state.list.notes
      })
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
