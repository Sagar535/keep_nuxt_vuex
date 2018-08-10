<template>
    <v-container fluid>
        <h1>NEWS API</h1>
        <v-text-field
                label="Search News"
                v-model="search_key"
                v-on:keyup.13="fetchNews"
        ></v-text-field>

        <v-layout>

                <v-list two-line>
                    <template v-for="article in mainArticles.articles">
                        <v-card>
                            <v-list-tile :href="article.url">
                                {{article.title}}
                            </v-list-tile>
                            <v-card
                                height="300px"
                                width="'150px"
                                :href="article.url"
                            >
                                <v-card-media
                                    height=100%
                                    :src="article.urlToImage"
                                >
                                </v-card-media>
                            </v-card>
                        </v-card>
                    </template>
                </v-list>
        </v-layout>
    </v-container>
</template>

<script>
  export default {
    name: 'news',
    data () {
      return {
        search_key: '',
        mainArticles: {}
      }
    },
    created () {
      this.getMainArticles()
    },
    methods: {
      async fetchNews () {
        console.log('in fetch news')
        this.mainArticles = await this.$axios.get(
          'https://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from=2018-08-10&' +
          'sortBy=popularity&' +
          'apiKey=5e4065cb078a4fd5b2f423cca3be8d17'
        )
        console.log(this.mainArticles.length)
      },
      async getMainArticles () {
        console.log('In get main articles')
        this.mainArticles = await this.$axios.$get(
          'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5e4065cb078a4fd5b2f423cca3be8d17'
        )
      }
    }
  }
</script>

<style scoped>

</style>
