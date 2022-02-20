<template>
  <section class="section has-background-light">
    <div class="container">
      <div class="columns is-centered is-multiline">
        <div class="column is-full has-text-centered">
          <p class="subtitle">Media</p>
          <h1 class="title">News</h1>
          <br>
        </div>
        <div class="column is-one-third-desktop is-half-tablet" v-for="(article, key) in articles" :key="key">
          <news-card :title="article.title"
                     :content="article.content"
                     :dateTime="article.dateTime"
                     :imgsrc="article.imgsrc"
                     :url="article.url"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "h-news",
    data() {
      return {
        articles: [
          {
            title: 'BioHiTech CEO on Changing the Way We Handle Food Waste',
            content: 'Frank E. Celli, CEO of BioHiTech, joins \'Cheddar Innovates\' to discuss how digesters...',
            dateTime: 'February 13, 2020',
            imgsrc: '/img/cheddar-interview-article.jpg',
            url: '/news/biohitech-ceo-on-changing-the-way-we-handle-food-waste'
          },
          {
            title: 'Behold… A Renewable Landfill for the Ages',
            content: 'Waste 360 chats with Emily Dyson, director of science research and development, BioHiTech Global.',
            dateTime: 'May 22, 2020',
            imgsrc: '/img/behold-renewable-article.jpeg',
            url: '/news/behold-a-renewable-landfill-for-the-ages-jun-22-2020'
          },
          {
            title: 'Carnival Corp Commits to Environmental Compliance',
            content: 'More than a month after the company paused cruising across its multiple brands...',
            dateTime: 'May 26, 2020',
            imgsrc: '/img/sea-holiday-vacation-blue-article.jpg',
            url: '/news/carnival-corp-commits-to-environmental-compliance'
          },

        ]
      }
    }
  }
</script>

<style scoped>

</style>



