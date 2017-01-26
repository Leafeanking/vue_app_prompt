<template>
  <div class="prompt">
    <button
      @click="getNewPrompt">
      Prompt Me!
    </button>
    <h1>{{ currentPrompt.name }}</h1>
    <p>{{ currentPrompt.description }}</p>
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
  data () {
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
