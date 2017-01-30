<template>
  <div class="prompt-form">
    <md-card>
      <md-card-header>
        {{ this.formTitle }}
      </md-card-header>
      <md-card-content>
        <form @submit.stop.prevent>
          <md-input-container>
            <label>Name</label>
            <md-input type="text" v-model="formData.name"></md-input>
          </md-input-container>

          <md-input-container>
            <label>Description</label>
            <md-textarea v-model="formData.description"></md-textarea>
          </md-input-container>

          <md-button
            type="submit"
            class="md-raised md-primary"
            @click.stop.prevent="submitPrompt">
              <span v-if="formData.id">Edit</span>
              <span v-else>Login</span>
          </md-button>
        </form>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
export default {
  name: 'EditPrompt',
  mounted: function () {},
  computed: {},
  props: ['prompt', 'form-title'],
  data: function () {
    console.log(this)
    return {
      formData: {
        id: this.prompt ? this.prompt.id : '',
        name: this.prompt ? this.prompt.name : '',
        description: this.prompt ? this.prompt.description : '',
        features: this.prompt ? this.prompt.features : [],
        tags: []
      }
    }
  },
  methods: {
    submitPrompt: function () {
      if (this.formData.id) {
        // {'token': this.$store.state.authToken}
        this.$http.put(`${process.env.API_ROOT}prompts/${this.formData.id}/`, this.formData, {headers: {Authorization: `Token ${this.$store.state.authToken}`}}).then(
          (response) => {
            // success
            this.$store.commit('updateUserPrompt', response.body)
            this.$router.push('/prompts')
          },
          (response) => {
            // error
            console.log('error', response)
          }
        )
      } else {
        this.$http.post(`${process.env.API_ROOT}prompts/`, this.formData, {headers: {Authorization: `Token ${this.$store.state.authToken}`}}).then(
          (response) => {
            // success
            this.$store.commit('updateUserPrompt', response.body)
            this.$router.push('/prompts')
          },
          (response) => {
            // error
            console.log('error', response)
          }
        )
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.prompt-form{
  max-width: 800px;
  width: 90%;
  margin: 0px auto;
}
</style>
