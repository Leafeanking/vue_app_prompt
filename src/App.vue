<template>
  <div id="app">
    <md-toolbar class="md-warn toolbar">
      <md-button
        class="md-icon-button"
        @click="toggleLeftSidenav">
          <md-icon>menu</md-icon>
      </md-button>

      <h2 class="md-title" @click="goToPrompt">App Prompt Vue Client</h2>

      <span v-if="this.$store.state.authToken" class="pull-right">
        Hello {{ username }}
      </span>

      <md-button
        v-if="this.$store.state.authToken"
        @click="logout"
        class="pull-right">
          Logout
      </md-button>

      <router-link v-else to="/login" class="pull-right">
          <md-button>Login</md-button>
      </router-link>
    </md-toolbar>

    <md-sidenav class="md-left" ref="leftSidenav" @open="open('Left')" @close="close('Left')">
      <md-list @click="closeLeftSidenav">
        <md-list-item>
          <router-link to="/">Prompt Me!</router-link>
        </md-list-item>
        <div>
          <md-list-item>
            <router-link to="/prompts">My Prompts</router-link>
          </md-list-item>
        </div>
      </md-list>
    </md-sidenav>

    <img src="./assets/logo.png">
    <transition name="slide-fade">
      <router-view></router-view>
    </transiton>

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
    goToPrompt: function () {
      this.$router.push('/')
    },
    logout: function () {
      this.$store.commit('logout')
      this.$router.push('/')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

h2.md-title{
  flex: 1;
}
h2.md-title:hover{
  cursor: pointer;
}
img{
  margin: 0px auto;
  display: block;
}
.center-text{
  text-align: center;
}
.slide-fade-enter-active {
  transition: all .2s .2s ease;
}
.slide-fade-leave-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for <2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
