<template>
  <b-collapse class="card" animation="slide" aria-id="contentIdForA11y3" :open="false">
    <div
      :class="`has-background-${bg}`"
      slot="trigger"
      slot-scope="props"
      class="card-header"
      role="button"
      aria-controls="contentIdForA11y3">
      <p class="default card-header-title">
        {{title}}
      </p>
      <a class="card-header-icon">
        <b-icon
          :icon="props.open ? 'close' : 'plus'">
        </b-icon>
      </a>
    </div>
    <div class="card-content">
      <div class="content" v-html="content">
      </div>
    </div>
  </b-collapse>
</template>

<script>
  export default {
    name: "faq-card",
    data() {
      return {
        isOpen: false
      }
    },
    props: {
      title: String,
      content: String,
      bg: String
    }
  }
</script>

<style scoped lang="sass">

</style>
