<template>
  <section class="section" v-if="filteredNews.length > 0">
    <div class="container">
      <div class="columns is-centered is-multiline">
        <div class="column is-full has-text-centered">
          <div class="subtitle is-size-6 has-text-centered">{{subtitle}}</div>
          <h2 class="title">{{title}}</h2>
          <br>
        </div>

        <div class="column is-one-third" v-for="(article, key) in filteredNews">
          <news-card :title="article.title"
                     :content="article.summary"
                     :dateTime="article.publicationDate"
                     :url="`/news/${article.slug}`"
                     :version="version || 2">

          </news-card>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "news-feed",
    data() {
      return {
        news: []
      }
    },
    mounted() {
      this.$axios.get('/news/getAll').then(res => {
        this.news = res.data
      }).catch(err => {
        console.log(err);
      })
    },
    computed: {
      filteredNews() {
        if (!this.tag) return this.news.slice(0, 3);

        let text = this.tag;
        return this.news.filter((option) => {
          return (option.tags.indexOf(text) > -1)
        }).slice(0, 3)
      }
    },
    props: {
      bg: String,
      tag: String,
      version: Number,
      title: {
        type: String,
        default: 'In The News'
      },
      subtitle: {
        type: String,
        default: 'News &amp; Media'
      }
    }
  }
</script>

<style scoped>

</style>
