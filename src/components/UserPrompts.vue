<template>
  <div class="user-prompts">
    <div class="center-text">
      <router-link :to="{name: 'newPrompt'}">
        <md-button class="md-raised md-warn">
            Add Prompt
        </md-button>
      </router-link>
    </div>
    <md-table>
      <md-table-header>
        <md-table-row>
          <md-table-head md-numeric>Id</md-table-head>
          <md-table-head>Prompt</md-table-head>
          <md-table-head>Actions</md-table-head>
        </md-table-row>
      </md-table-header>

      <md-table-body>
        <md-table-row v-for="prompt in this.$store.state.user.prompts" :key="prompt.id">
          <md-table-cell md-numeric>{{ prompt.id }}</md-table-cell>
          <md-table-cell>{{ prompt.name }}</md-table-cell>
          <md-table-cell>
            <router-link :to="{ name: 'editPrompt', params: {id: prompt.id}}">Edit</router-link>
          </md-table-cell>
        </md-table-row>
      </md-table-body>
    </md-table>
  </div>
</template>

<script>
export default {
  name: 'UserPrompts',
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
