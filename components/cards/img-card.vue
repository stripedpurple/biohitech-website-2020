<template>
  <nuxt-link :to="link">
    <div class="box" :style="{'background-image': 'url(' + imgsrc + ')'}">
      <div class="box-body">
        <div class="box-content">
          <p class="title is-size-4-tablet is-size-4 has-text-white">{{title}}</p><br>
          <div class="content" v-if='!!content' v-html="content"></div>
          <p class="default is-size-4-tablet is-size-5">Continue Reading</p>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
  export default {
    name: "img-card",
    props: {
      link: String,
      title: String,
      imgsrc: String,
      content: String
    }
  }
</script>

<style scoped lang="sass">
  @media screen and (min-width: 769px)
    .box
      max-height: 600px !important
      margin: 2em 0 5rem 0

  .box
    height: 60vh
    max-height: 300px
    padding: 1rem
    background-position: center
    background-size: cover
    background-repeat: no-repeat
    margin: 0 0 1rem 0
    overflow: hidden
    box-sizing: border-box

    .box-body
      color: white
      background: rgba(0,0,0,0.35)
      position: relative
      height: 100%
      padding: 0.75rem
      border: 3px solid white
      display: grid
      place-items: center
      text-align: center
      overflow: hidden
      box-sizing: border-box
</style>
