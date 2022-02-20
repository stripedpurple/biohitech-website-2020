<template>
  <section class="section has-background-light">
    <div class="container">
      <div class="columns is-multiline is-centered">
        <div class="column is-one-third-desktop is-half-tablet" v-for="(link, key) in links" :key="key" v-if="$role.hasAny(link.roles)">
          <nuxt-link :to="link.url">
            <div class="box">
              <article class="media">
                <div class="media-left">
                    <b-icon :icon="link.icon" size="is-large"/>
                </div>
                <div class="media-content">
                  <div class="content">
                    <p class="default title is-size4">{{link.title}}</p>
                    <p class="default">{{link.content}}</p>
                  </div>
                </div>
              </article>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
  export default {
    name: "index",
    middleware: ['auth-editor'],
    data() {
      return {
        links: [
          {
            title: 'News',
            content: 'Add, Remove, and edit news articles',
            url: '/news',
            icon: 'newspaper'
          },{
            title: 'Careers',
            content: 'Add, Remove, and edit job listings',
            url: '/careers',
            icon: 'account-multiple'
          },{
            title: 'Contacts',
            content: 'View and search previous contacts',
            url: '/admin/contacts',
            icon: 'email'
          },{
            title: 'Cache Refresh',
            content: 'Refresh cached data. ADMIN ONLY',
            url: '/admin/cache',
            icon: 'refresh',
            roles: [
              'bht-it',
              'website-admin'
            ]
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
