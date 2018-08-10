<template>
    <v-container fluid >
        <v-layout v-if!="loggedIn">
            <v-text-field label="username" v-model="username">
            </v-text-field>
            <v-text-field label="password" v-model="password">
            </v-text-field>
            <v-btn @click="getToken">Submit</v-btn>
        </v-layout>
        <v-layout v-else>
            {{ posts }}
        </v-layout>
    </v-container>

</template>

<script>
  export default {
    name: 'login',
    data () {
      return {
        username: '',
        password: '',
        token: '',

        posts: {}
      }
    },
    methods: {
      async getToken () {
        this.$axios.$post('http://192.168.99.54/api/api-token-auth/', {
          username: this.username,
          password: this.password
        }).then(function (response) {
          const token = response
          console.log(token)
          this.token = token
        }).catch(function (error) {
          console.log(error.message)
        })
      },
      async postNotice () {
        this.$axios.$post('', {
          headers:  {'Authorization': 'JWT ' + this.token},
          
        })
      }
    },
    computed: {
      loggedIn () {
        return this.token !== ''
      }
    }
  }
</script>

<style scoped>

</style>
