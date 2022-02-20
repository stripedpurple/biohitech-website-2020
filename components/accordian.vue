<template>
  <div>
    <b-collapse
      class="card"
      animation="slide"
      v-for="(collapse, index) of items"
      :key="index"
      :open="isOpen == index"
      @open="isOpen = index">
      <div
        slot="trigger"
        slot-scope="props"
        class="card-header"
        role="button"
        :class="`has-background-${headerBg}`"
      >
        <p class="card-header-title default">
          {{ collapse.title }}
        </p>
        <a class="card-header-icon">
          <b-icon
            :icon="props.open ? 'menu-down' : 'menu-up'">
          </b-icon>
        </a>
      </div>
      <div :class="`card-content has-background-${contentBg}`" style="border-top: 1px solid rgba(0,0,0,0.15); box-shadow: inset 0 0.25rem 0.5rem -0.25rem rgba(0,0,0,0.25)">
        <div class="content" v-html="collapse.content"></div>
      </div>
    </b-collapse>
  </div>
</template>

<script>
  export default {
    name: "accordian",
    data() {
      return {
        isOpen: 0
      }
    },
    props: {
      items: {
        required: true,
        type: Array
      },
      headerBg: String,
      contentBg: {
        type: String,
        default: 'light'
      }
    }
  }
</script>

<style scoped>

</style>
