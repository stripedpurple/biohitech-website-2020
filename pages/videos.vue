<template>
  <div>
    <section class="hero is-info is-medium">
      <div class="hero-body">
        <div class="container">
          <h1 class="subtitle">BioHiTech</h1>
          <h2 class="title is-size-1-desktop">Video Training</h2>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="columns is-multiline is-centered">
          <div class="column is-full">
            <h2 class="title">Eco-Safe Digester® Tutorials</h2>
          </div>

          <div class="column is-half-tablet is-one-quarter-desktop"
               v-for="(vid, key) in digesterTraining" :key="key">
            <div class="card has-background-light">
              <header class="card-header">
                <span class="card-header-title">{{vid.title}}</span>
              </header>
              <div class="card-image" @click.prevent="showModel(vid.ytid)">
                <figure class="image is-16by9">
                  <img loading="lazy" :src="`https://img.youtube.com/vi/${vid.ytid}/mqdefault.jpg`" :alt="vid.title">
                </figure>
              </div>
              <footer class="card-footer">
                <a :href="vid.download" class="button is-light is-fullwidth"
                   :download="`BioHiTech Training - ${vid.title}.mp4`"
                style="border-right: 1px solid rgba(0,0,0,0.25)">
                  <b-icon icon="download"/>&nbsp;&nbsp;&nbsp;&nbsp;Download</a>

                <b-button class="button is-light is-fullwidth "
                          @click.prevent="showModel(vid.ytid)">
                  <b-icon icon="play"/>&nbsp;&nbsp;&nbsp;&nbsp;Play</b-button>
              </footer>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section class="section has-background-light">
      <div class="container">
        <div class="columns is-multiline is-centered">
          <div class="column is-full">
            <h2 class="title">BioHiTech Cloud® Tutorials</h2>
          </div>

          <div class="column is-half-tablet is-one-quarter-desktop"
               v-for="(vid, key) in cloudTraining" :key="key">
            <div class="card has-background-primary">
              <header class="card-header">
                <span class="card-header-title">{{vid.title}}</span>
              </header>
              <div class="card-image" @click.prevent="showModel(vid.ytid)">
                <figure class="image is-16by9">
                  <img loading="lazy" :src="`https://img.youtube.com/vi/${vid.ytid}/mqdefault.jpg`" :alt="vid.title">
                </figure>
              </div>
              <footer class="card-footer">
                <a :href="vid.download" class="button is-primary is-fullwidth "
                   style="border-right: 1px solid rgba(255,255,255,0.25)"
                   :download="`BioHiTech Training - ${vid.title}.mp4`">
                  <b-icon icon="download"/>&nbsp;&nbsp;&nbsp;&nbsp;Download</a>
                <b-button class="button is-primary is-fullwidth "
                   @click.prevent="showModel(vid.ytid)">
                  <b-icon icon="play"/>&nbsp;&nbsp;&nbsp;&nbsp;Play</b-button>
              </footer>
            </div>
          </div>

        </div>
      </div>
    </section>

    <b-modal :active.sync="isOpen">
      <figure class="image is-16by9">
        <iframe class="has-ratio" width="1920" height="1080"
                :src="`https://www.youtube.com/embed/${modelUrl}`"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
      </figure>
    </b-modal>

    <meta-tags title="Training Videos & Video Tutorials" description="Training Videos & Video Tutorials"/>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        modelUrl: '',
        isOpen: false,
        digesterTraining: [
          {
            title: "Daily Operations",
            ytid: "U6sRzKx0ltI",
            download: "https://videos.biohitech.com/Daily_Operation_Recording.mp4"
          }, {
            title: "Advanced Operations",
            ytid: "0AYK0vMGwZQ",
            download: "https://videos.biohitech.com/Advanced_Operations.mp4"
          }, {
            title: "Regular Maintenance",
            ytid: "CS6ECKeK04s",
            download: "https://videos.biohitech.com/Regular_Maintenance.mp4"
          }, {
            title: "Common Troubleshooting",
            ytid: "sLq2R5s1Gdc",
            download: "https://videos.biohitech.com/Common_Troubleshooting.mp4"
          }, {
            title: "The Science of Digestion",
            ytid: "F4Obb2v5HSA",
            download: "https://videos.biohitech.com/The_Science_of_Digestion.mp4"
          }, {
            title: "Waste Categorization",
            ytid: "PP8RsXKLiBI",
            download: "https://videos.biohitech.com/Waste_Categorization.mp4"
          }, {
            title: "The BioHiTech Cloud",
            ytid: "5Opg2wvJHb8",
            download: "https://videos.biohitech.com/Biohitech_Cloud.mp4"
          }, {
            title: "Digester Installation",
            ytid: "wz_EA6iAfcU",
            download: "https://videos.biohitech.com/Digester+Installation.mp4"
          },
        ],
        cloudTraining: [
          {
            title: "Introduction to BioHiTech Cloud",
            ytid: "RdhOe04OoMw",
            download: "https://videos.biohitech.com/Tutorial_Cloud_Intro.mp4"
          }, {
            title: "Navigating The Cloud",
            ytid: "OQ7u16X9jXw",
            download: "https://videos.biohitech.com/Tutorial_Cloud_Navigation.mp4"
          }, {
            title: "The Dashboard",
            ytid: "bmuxJkpdFsU",
            download: "https://videos.biohitech.com/Tutorial_Cloud_Dashboard.mp4"
          }, {
            title: "Machine Utilization",
            ytid: "RcP-fQ3h2dE",
            download: "https://videos.biohitech.com/Tutorial_Cloud_Utilization.mp4"
          }, {
            title: "Advanced Reporting",
            ytid: "BU7aGZ8PkSw",
            download: "https://videos.biohitech.com/Tutorial_Cloud_Advanced_Reporting.mp4"
          }, {
            title: "Cost Savings Benefits",
            ytid: "hMu1fO7LOxE",
            download: "https://videos.biohitech.com/Tutorial_Cloud_Cost_Savings.mp4"
          }, {
            title: "Environmental Contributions",
            ytid: "jSEGVON5CLg",
            download: "https://videos.biohitech.com/Tutorial_Cloud_Environmental_Contributions.mp4"
          }, {
            title: "Sharing Your Data",
            ytid: "0hAiPQQDOE8",
            download: "https://videos.biohitech.com/Tutorial_Cloud_Sharing_Data.mp4"
          }, {
            title: "Account Preferences",
            ytid: "sWlEiecLwCk",
            download: "https://videos.biohitech.com/Tutorial_Cloud_Account_Preferences.mp4"
          }, {
            title: "Alerts",
            ytid: "Hi4aU_cW0ig",
            download: "https://videos.biohitech.com/Tutorial_Cloud_Alerts.mp4"
          },
        ]
      }
    },
    methods: {
      showModel(url) {
        this.modelUrl = url;
        this.isOpen = !this.isOpen;
      }
    }
  }
</script>

<style scoped lang="sass">
  .card-header-title
    display: block
    text-align: center

  .card-footer
    border-top: none

</style>
