<template>
  <div class="user-prompts">
    <PromptForm v-bind:prompt="prompt" formTitle="Edit Prompt"/>
  </div>
</template>

<script>
import PromptForm from './PromptForm'

export default {
  name: 'EditPrompt',
  components: {
    PromptForm
  },
  mounted: function () {},
  computed: {
    prompt: function () {
      let id = this.$route.params.id
      let cleanedId = id instanceof String ? id : id.toString()
      return this.$store.getters.userPromptById(cleanedId)
    }
  },
  data: function () {
    return {}
  },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
