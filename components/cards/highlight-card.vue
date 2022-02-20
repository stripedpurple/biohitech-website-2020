<template>
  <div class="card" :style="{'margin-top': mgtop + 'rem'}">
    <div class="card-image" v-if="position">
      <figure class="image">
        <img loading="lazy" :src="imgsrc" alt="Placeholder image">
      </figure>
    </div>

    <div class="card-content">
      <p class="title is-4 has-text-left">{{title}}</p>
      <div class="content">
        {{content}}

        <br>
        <br>
        <nuxt-link :to="btn.link" class="button is-primary is-large" style="font-size: 1rem; padding: 1.5rem 2rem">{{btn.text}}</nuxt-link>
      </div>
    </div>

    <div class="card-image" v-if="!position">
      <figure class="image">
        <img loading="lazy" :src="imgsrc" alt="Placeholder image">
      </figure>
    </div>
  </div>
</template>

<script>
    export default {
        name: "highlight-card",
        props: {
          btn: {
            type: Object,
            required: true
          },
          title: {
            type: String,
            required: true
          },
          content: {
            type: String,
            required: true
          },
          position: {
            type: Boolean,
            default: true
          },
          imgsrc: {
            type: String,
            required: true
          },
          mgtop: Number
        }
    }
</script>

<style scoped lang="sass">
  .button
    width: 100%

  .card
    border: none
    box-shadow: none

  @media screen and (max-width: 1024px)
    .card
      margin-top: 0 !important
      height: 100%

      .card-content, .content
        height: 100%
        display: flex
        flex-direction: column
        justify-content: space-between


    img
      display: none
</style>
