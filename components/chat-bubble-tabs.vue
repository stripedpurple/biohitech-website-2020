<template>
  <b-tabs v-model="activeTab" type="is-button" expanded>
    <b-tab-item :label="tab.label" v-for="(tab, key) in tabs" :key="key">
      <div class="content" v-html="tab.content"></div>
    </b-tab-item>
  </b-tabs>
</template>

<script>
  export default {
    name: "d-stats",
    data() {
      return {
        activeTab: 0,
      }
    },
    props: {
      tabs: Array
    }
  }
</script>

<style scoped lang="sass">
</style>
