<template>
  <v-app>
    <v-navigation-drawer
            persistent
            :mini-variant="miniVariant"
            :clipped="clipped"
            v-model="drawer"
            enable-resize-watcher
            fixed
            app
    >
      <v-list>
        <v-list-tile
                value="true"
                v-for="(item, i) in items"
                :key="i"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
            app
            :clipped-left="clipped"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn icon @click.stop="clipped = !clipped">
        Clip
      </v-btn>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <nuxt-link to="/notes"><v-btn round>Notes</v-btn></nuxt-link>
      <nuxt-link to="/list"><v-btn round>Lists</v-btn></nuxt-link>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        clipped: false,
        drawer: false,
        fixed: false,
        items: [{
        }],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Keep Like'
      }
    }
  }
</script>
