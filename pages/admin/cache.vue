<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column">
          <b-message title="Danger (Admin use only)" type="is-danger" aria-close-label="Close message">
            This section can be dangerous. Please only use if you know what you are doing.
          </b-message>
          <h1 class="title">Cache Management</h1>

          <table class="table is-fullwidth">
            <thead>
            <tr>
              <th>Cache</th>
              <th></th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(cache, key) in caches">
              <td>{{cache.name}}</td>
              <td>{{cache.description}}</td>
              <td class="has-text-right">
                <b-button icon-left="refresh" type="is-success" @click="clearCache(cache.url)">Update</b-button>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "cache",
    middleware: ['auth-admin'],
    data() {
      return {
        caches: [
          {name: 'News', description: 'Refresh news articles and summaries.', url: '/news/updateCache'},
          {name: 'News Tags', description: 'Refresh news article tags cache.', url: '/news/tags/updateCache'},
          {name: 'Careers', description: 'Refresh careers listings.', url: '/careers/updateCache'},
        ]
      }
    },
    methods: {
      clearCache(url) {
        this.$axios.get(url).then(res => {
          console.log(res);
          this.$buefy.toast.open({
            message: "Cache cleared",
            duration: 3500,
            type: 'is-success'
          })
        }).catch(err => {
          console.log(err);
          this.$buefy.toast.open({
            message: "Error clearing cache!",
            duration: 3500,
            type: 'is-danger'
          })
        })
      }
    }
  }
</script>

<style scoped>

</style>
