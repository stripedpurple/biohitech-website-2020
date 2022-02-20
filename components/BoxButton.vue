<template>
  <div class="box">
    <article class="media">
      <div class="media-left">
        <figure class="image is-64x64">
          <b-icon
            :icon="option.icon"
            size="is-large"
            type="is-grey"
          ></b-icon>
        </figure>
      </div>
      <div class="media-content">
        <div class="content">
          <p class="default"><strong class="title is-size-4">{{option.title}}</strong></p>
          <p class="default">{{option.text}}</p>
        </div>
      </div>
    </article>
  </div>
</template>


<script>
  export default {
    props: {
      option: Object,
    }
  }
</script>


<style scoped lang="sass">
  .box
    background: #f7f7f7
    height: 100%

    &:hover
      background: #dddddd

</style>
