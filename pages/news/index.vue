<template>
  <div>
    <section class="hero has-background-info is-medium">
      <div class="hero-body">
        <h1 class="subtitle">BioHiTech News</h1>
        <p class="title is-size-1-desktop">In the news</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-full" v-if="!!$auth.user">
            <nuxt-link class="button is-success" to="/news/edit">
              <b-icon icon="plus"/>&nbsp;&nbsp;&nbsp;&nbsp;Add New Story
            </nuxt-link>
          </div>
        </div>

        <div class="columns is-multiline">
          <div class="column is-full">
            <b-field label="Filter by tags">
              <b-taginput
                v-model="tags"
                :data="filteredTags"
                ellipsis
                field=""
                icon="label"
                :allow-new="false"
                :autocomplete="true"
                placeholder="filter by tags"
                @typing="getFilteredTags">
              </b-taginput>
            </b-field>
          </div>
          <div class="column is-half" v-for="(article, key) in filteredStories.slice((currentPage -1)  * 10, (currentPage -1) * 10 + 10)">
            <div class="box has-background-light">
              <div>
                <p class="title is-size-4">{{article.title}}</p>
                <p class="subtitle is-size-6"><small>{{article.publicationDate | dateFormatter}}</small></p>
              </div>

              <div class="content" v-html="article.source || article.summary"></div>

              <div class="buttons">
                <nuxt-link :to="`/news/${article.slug}`" class="button is-primary">
                  Continue Reading
                </nuxt-link>
                <b-button type="is-danger" @click="confirmDelete(article._id)" v-if="!!$auth.user">
                  <b-icon icon="delete"/>
                </b-button>
                <nuxt-link :to="`/news/edit?post=${article.slug}`" class="button is-info" v-if="!!$auth.user">
                  <b-icon icon="pencil"/>
                </nuxt-link>
              </div>
            </div>
          </div>

          <div class="column is-full">
            <b-pagination
              :total="filteredStories.length"
              v-model="currentPage"
              order="is-right"
              simple
              :current.sync="currentPage"
              per-page="10"
              icon-prev="arrow-left"
              icon-next="arrow-right"
              aria-next-label="Next page"
              aria-previous-label="Previous page"
              aria-page-label="Page"
              aria-current-label="Current page">
            </b-pagination>

          </div>
        </div>
      </div>
    </section>

    <meta-tags title="News & Blog Articles" description="BioHiTech in the news" img="/img/pexels-maksim-goncharenok-4348556-1200.min.jpg" :url="this.$route.fullPath"/>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        currentPage: 1,
        news: null,
        tags: [],
        filteredTags: [],
        allTags: []
      }
    },
    computed: {
      filteredStories(){
        return this.tags.length > 0 ? this.news.filter(x => {
          for (let y of x.tags) {
            if (this.tags.indexOf(y) > -1) {
              return true
            }
          }
          return false
        }) : this.news

      }
    },
    async asyncData({$axios}) {
      let news = await $axios.get(`/news/getAll`).then(res => {
        return res.data.filter(x => {
          return !(x.tags.indexOf('Case Study') > -1 || x.tags.indexOf('Research') > -1)
        })
      });
      let tags = await $axios.get(`/news/tags/getAll`).then(res => {
        return res.data.filter(x => {
          return !(x === 'Case Study' || x === 'Research')
        })
      });

      return {
        news: news,
        allTags: tags
      }
    },
    methods: {
      confirmDelete(deleteKey) {
        this.$buefy.dialog.confirm({
          title: 'Deleting Job Posting',
          message: 'Are you sure you want to <b>delete</b> this job? This action cannot be undone.',
          confirmText: 'Delete',
          type: 'is-danger',
          hasIcon: true,
          onConfirm: () => this.deleteJob(deleteKey)
        })
      },
      deleteJob(deleteKey) {
        this.$axios.delete(`/news/deleteById/${deleteKey}`).then(res => {
          if (res.status == 200) {
            this.$buefy.toast.open({type: 'is-success', message: 'Post deleted!'});
            this.news = this.news.filter(x => x._id !== deleteKey)
          } else {
            this.$buefy.toast.open({type: 'is-daanger', message: 'Error deleting post!'});
          }
        }).catch(err => {
          if (err) {
            this.$buefy.toast.open({type: 'is-daanger', message: 'Error deleting post!'});
          }
        })
      },
      getFilteredTags(text) {
        text = text.toLowerCase();
        return this.filteredTags = this.allTags.filter((option) => {
          return (option.toLowerCase().indexOf(text) >= 0)
        })
      }
    },
    filters: {
      dateFormatter(v) {
        if (!v) return ''

        v = new Date(v);
        return `${months[v.getMonth()]} ${v.getDate().toString().length === 1 ? '0' + v.getDate() : v.getDate()}, ${v.getFullYear()}`
      }
    },
    mounted() {
      if (this.$route.query.tags) this.tags = this.$route.query.tags.split(',')
    }
  }

  let months = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December',
  }
</script>

<style scoped lang="sass">
  .hero
    /*background: #333 url('/img/pexels-maksim-goncharenok-4348556-1200.min.jpg') center center no-repeat*/
    background-size: cover

  .box
    height: 100%
    display: flex
    flex-direction: column
    justify-content: space-between

    .subtitle
      text-transform: unset !important
      color: #7a7a7a
      letter-spacing: unset !important

    .content
      height: 100%

  .buttons .button
    margin-left: .75rem
    margin-right: 0 !important

    &:first-child
      margin-left: 0
</style>












