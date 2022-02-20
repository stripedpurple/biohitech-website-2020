<template>
    <aside>
      <p class="default">Tags in this article</p>
      <hr>
      <b-taglist>
        <n-link  v-for="(tag, key) in articleTags" :key="key" :to="`/news?tags=${tag}`"><b-tag type="is-dark">{{tag}}</b-tag></n-link>
      </b-taglist>

      <br>

      <p class="default">All tags</p>
      <hr>
      <b-taglist>
        <n-link v-for="(tag, key) in allTags" :key="key" :to="`/news?tags=${tag}`"><b-tag type="is-dark">{{tag}}</b-tag></n-link>
      </b-taglist>

    </aside>
</template>

<script>
    export default {
        name: "tag-cloud",
      props: {
          allTags: {
            required: true,
            type: Array
          },
          articleTags: {
            required: true,
            type: Array
          }
      }
    }
</script>

<style scoped lang="sass">
  .tags a:not(:last-child)
    margin-right: .5rem

  hr
    margin: 0 0 0.5rem 0
</style>
