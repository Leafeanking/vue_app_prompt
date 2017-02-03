<template>
  <div class="prompt">

    <md-layout md-gutter md-column md-flex md-align="center">
      <md-layout md-align="center">
        <md-button
          class="md-raised md-accent"
          @click="getNewPrompt">
          Prompt Me
        </md-button>
      </md-layout>

      <md-layout><!-- spacer -->&nbsp;</md-layout>

      <md-layout md-align="center">
        <md-card md-card>
          <div v-if="currentPrompt">
            <md-card-header>
              <div class="md-title">{{ currentPrompt.name }}</div>
            </md-card-header>
            <md-card-content v-if="currentPrompt.description">
              <p>{{ currentPrompt.description }}</p>
            </md-card-content>
          </div>
          <md-spinner v-else md-indeterminate></md-spinner>
        </md-card>
      </md-layout>
    </md-layout>
  </div>
</template>

<script>
export default {
  name: 'prompt',
  mounted: function () {
    this.$store.dispatch('getRandomPrompt')
  },
  computed: {
    currentPrompt: function () {
      return this.$store.state.currentPrompt
    }
  },
  data: function () {
    return {}
  },
  methods: {
    getNewPrompt: function () {
      this.$store.dispatch('getRandomPrompt')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
