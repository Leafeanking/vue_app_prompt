<template>
  <div class="login">
    <md-card>
      <md-card-content>
        <form @keyup.enter="requestAuthToken">
          <md-input-container :class="{'md-input-invalid': usernameError}">
            <label>Username</label>
            <md-input type="text" v-model="username"></md-input>
            <span class="md-error">{{ usernameError }}</span>
          </md-input-container>
          <md-input-container md-has-password :class="{'md-input-invalid': passwordError}">
            <label>Password</label>
            <md-input type="password" v-model="password"></md-input>
            <span class="md-error">{{ passwordError }}</span>
          </md-input-container>
        </form>
      </md-card-content>
      <md-button
        type="submit"
        :class="['md-raised', formError ? 'md-warn' : 'md-primary', 'md-dense']"
        @click.stop.prevent="requestAuthToken">
          Login
          <small v-if="formError">
            <br>
            {{ formError }}
          </small>
      </md-button>
    </md-card>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'Login',
  mounted: function () {},
  computed: {},
  data: function () {
    return {
      username: '',
      password: '',
      usernameError: '',
      passwordError: '',
      formError: ''
    }
  },
  methods: {
    requestAuthToken: function (e) {
      let thisRef = this
      this.usernameError = this.passwordError = ''
      Vue.http.post(`${process.env.API_ROOT}token-auth/`, {'username': this.username, 'password': this.password}).then(
        function (response) {
          thisRef.$store.commit('setAuthToken', response.body.token)
          thisRef.$store.commit('setUser', response.body.user)
          thisRef.username = ''
          thisRef.password = ''
          thisRef.$router.push('/')
        },
        function (response) {
          console.log('error', response)
          if (response.body && response.body.username && response.body.username.length) {
            thisRef.usernameError = response.body.username[0]
          }

          if (response.body && response.body.password && response.body.password.length) {
            thisRef.passwordError = response.body.password[0]
          }

          if (response.body && response.body.non_field_errors && response.body.non_field_errors) {
            thisRef.formError = response.body.non_field_errors[0]
          }
        }
      )
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login{
  max-width: 800px;
  width: 90%;
  margin: 0px auto;
}

</style>
