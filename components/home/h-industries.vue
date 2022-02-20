<template>
  <!-- Industries -->
  <section class="section">
    <div class="container is-fluid">
      <div class="columns is-multiline is-mobile">
        <div class="column is-full has-text-centered">
          <p class="subtitle">NOT ME, WE</p>
          <h1 class="title">BioHiTech Makes Big Impacts in Big Industries</h1>
        </div>

        <div class="column is-one-quarter-fullhd is-full-mobile is-half-tablet" v-for="(industry, key) in industries" :key="key">
          <img-card :title="industry.title" :imgsrc="industry.imgsrc" :link="industry.link"/>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="columns is-multiline">
        <div class="column is-full"><br></div>
        <div class="column">
          <p class="subtitle is-size-6">IT’S NOT ME. OR YOU. OR THEM. IT’S US</p>

          <h2 class="title is-size-2">It’s Time for a Change</h2>

          <p>As citizens of the global community, each of us has an opportunity to make zero waste choices today for a
            better world tomorrow. At BioHiTech, we’re commited to doing our part for the environment, and help
            empower others to do the same, because together we can achieve a future with less waste.</p>

          <p>Converting trash to energy is a vital part of the waste and renewable energy industry in the U.S. The
            high demand for energy has already led to an increase in the use of waste incinerators. There is a need
            for US industries to embrace the use of alternative fuels to serve as fossil fuel replacements and reduce
            their carbon footprint.</p>
        </div>

        <div class="column is-1"></div>

        <div class="column is-one-third">
          <figure class="image is-square"><img loading="lazy" src="/img/1-planet-box.jpg" alt=""></figure>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "h-industries",
    data() {
      return {
        industries: [
          {
            title: 'HEALTHCARE',
            imgsrc: '/img/healthcare-card.jpg',
            link: '/industries/healthcare'
          },
          {
            title: 'RESTAURANTS',
            imgsrc: '/img/restaurants-card.jpg',
            link: '/industries/restaurants'
          },
          {
            title: 'MUNICIPALITIES',
            imgsrc: '/img/municipalities-box.jpeg',
            link: '/industries/municipal-waste'
          },
          {
            title: 'CRUISE SHIPS',
            imgsrc: '/img/kevin-bluer-vNcRr-mUPTI-unsplash.jpg',
            link: '/industries/cruise-liner'
          },

        ]
      }
    }
  }
</script>

<style scoped>

</style>
