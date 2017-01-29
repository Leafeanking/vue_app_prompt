<template>
  <div id="app">
    <md-toolbar class="md-warn">
      <md-button
        class="md-icon-button"
        @click="toggleLeftSidenav">
          <md-icon>menu</md-icon>
      </md-button>

      <h2 class="md-title" style="flex: 1">Vue Material</h2>
      <span v-if="this.$store.state.authToken">
        Hello {{ username }}
      </span>
      <md-button
        v-if="this.$store.state.authToken"
        @click="logout">
          Logout
      </md-button>
      <router-link v-else to="/login">
          <md-button>Login</md-button>
      </router-link>
    </md-toolbar>

    <md-sidenav class="md-left" ref="leftSidenav" @open="open('Left')" @close="close('Left')">
      <md-list @click="closeLeftSidenav">
        <md-list-item>
          <router-link to="/">Prompt Me!</router-link>
        </md-list-item>
      </md-list>
    </md-sidenav>

    <img src="./assets/logo.png">
    <router-view></router-view>

  </div>
</template>

<script>
export default {
  name: 'app',
  computed: {
    username: function () {
      console.log(window.sessionStorage)
      return this.$store.getters.userName
    }
  },
  components: {},
  methods: {
    toggleLeftSidenav: function () {
      this.$refs.leftSidenav.toggle()
    },
    closeLeftSidenav: function () {
      this.$refs.leftSidenav.close()
    },
    toggleRightSidenav: function () {
      this.$refs.rightSidenav.toggle()
    },
    closeRightSidenav: function () {
      this.$refs.rightSidenav.close()
    },
    open: function (ref) {
      console.log('Opened: ' + ref)
    },
    close: function (ref) {
      console.log('Closed: ' + ref)
    },
    logout: function () {
      this.$store.commit('logout')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
