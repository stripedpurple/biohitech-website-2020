<template>
  <div>
    <section class="section" v-if="error.statusCode !== 418">
      <div class="container has-text-centered">
        <div>
          <h1 v-if="error.statusCode === 404" class="title is-huge">404</h1>
          <h1 v-else class="title  is-size-0 is-size-1-mobile">An error occurred</h1>
          <p class="is-size-1 is-italic default">{{error.message || 'The page your are looking for does not exist!'}}</p>
          <br>
          <div class="buttons has-text-centered is-centered">
            <nuxt-link to="/" class="button is-primary">Home</nuxt-link>
            <nuxt-link to="/digesters" class="button is-primary">Digesters</nuxt-link>
            <nuxt-link to="/digesters/cloud" class="button is-primary">Analytics</nuxt-link>
            <nuxt-link to="/renewables" class="button is-primary">Renewables</nuxt-link>
            <nuxt-link to="/altapure" class="button is-primary">Altapure</nuxt-link>
            <nuxt-link to="/contact" class="button is-primary">Contact</nuxt-link>
          </div>
        </div>
      </div>
    </section>

    <section class="hero is-fullheight tea is-dark" v-else-if="error.statusCode === 418">
      <div class="">
        <h1 class="title has-text-white is-huge">{{error.statusCode}}</h1>
        <p class="default is-size-1 is-playfair">
          {{error.message}}
        </p>
        <br>
        <nuxt-link to="/" class="button is-primary is-large">GO HOME</nuxt-link>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    mounted() {
      console.log(this.error);
    }
  }
</script>

<style lang="sass" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap')

  .hero
    display: flex
    align-items: flex-start
    justify-content: center
    > div
      max-width: 800px
      width: 100%

  .is-playfair
    font-family: "Playfair Display", Serif, serif

  .main-content
    margin: 0 !important

  .lionel
    background: #dedede url('/img/lionel-richie-v2.jpg') top center no-repeat

  .tea
    background: #dedede url('/img/tea2.jpg') bottom right no-repeat

  .is-fullheight
    text-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.25)
    height: 100vh
    background-size: cover
    display: flex

    @supports not (backdrop-filter: blur())
      background: rgba(0, 0, 0, 0.75)

    &.section
      justify-content: center
      align-items: center
    .button
      padding: 3rem 4rem

      &.is-light.is-outlined
        backdrop-filter: blur(20px)

  h1.title.is-huge
    font-size: 20vmin !important

  @media screen and (min-height: 1025px)
    h1.title.is-huge
      font-size: 10vmin !important

</style>
