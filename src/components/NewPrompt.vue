<template>
  <div class="user-prompts">
    <PromptForm formTitle="Add Prompt" />
  </div>
</template>

<script>
import PromptForm from './PromptForm'

export default {
  name: 'NewPrompt',
  components: {
    PromptForm
  },
  mounted: function () {},
  computed: {},
  data: function () {
    return {}
  },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
