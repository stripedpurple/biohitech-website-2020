<template>
  <!--  Solutions  -->
  <section class="section has-background-light">
    <div class="container">
      <div class="columns is-multiline">
        <div class="column is-full has-text-centered">
          <p class="subtitle">A FUTURE WITH LESS WASTE IS A FUTURE LESS WASTED</p>
          <h1 class="title">BioHiTech Solutions</h1>
          <br>
        </div>

        <div class="column is-half-tablet is-one-quarter-desktop" v-for="(solution, key) in solutions" :key="key">
          <highlight-card :title="solution.title" :content="solution.content" :btn="solution.btn"
                          :imgsrc="solution.imgsrc" :position="solution.position" :mgtop="solution.mgtop"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "h-solutions",
    data() {
      return {
        solutions: [
          {
            title: 'Waste into Energy',
            content: 'High Efficiency Biological Treatment (HEBioT™) converts a variety of waste forms into renewable fuel.',
            imgsrc: '/img/recycle-symbol-box.jpg',
            position: false,
            btn: {
              text: 'Renewables',
              link: '/renewables'
            },
            mgtop: 6
          }, {
            title: 'Our cloud technology lets you analyze food waste data.',
            content: 'Manage your digester’s operations with the BioHiTech Cloud®.  This cloud-based application will help you improve your supply chain management.',
            imgsrc: '/img/cloud-box.jpg',
            btn: {
              text: 'ANALYTICS',
              link: '/digesters/cloud'
            },
          },{
            title: 'Natural green technology diverts food waste from distant landfills.',
            content: 'Revolution digesters from BioHiTech divert food waste from landfills by breaking it down into a liquid that enters the wastewater system. These easy-to-use machines will transform how you manage food waste.',
            imgsrc: '/img/cash-in-hand-500.jpg',
            position: false,
            btn: {
              text: 'DIGESTERS',
              link: '/digesters'
            },
            mgtop: 12
          }, {
            title: 'Disinfection Solutions',
            content: 'As we enter a post-COVID world, it will be imperative to build innovative solutions that will have a positive impact on the environment and our lives. That is why we are on a mission to grow a vast network of partners with products that are solving some of the world’s most complex environmental challenges. We are dedicated to being the #1 trusted provider of the most effective green solutions available today. ',
            imgsrc: '/img/globe-in-hand.jpg',
            btn: {
              text: 'DISINFECTION SOLUTIONS',
              link: '/altapure'
            },
            mgtop: 8
          },
        ],
      }
    }
  }
</script>

<style scoped>

</style>
