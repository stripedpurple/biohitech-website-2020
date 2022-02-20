<template>
  <section class="section">
    <div class="container is-fullhd">
      <div class="columns">
        <div class="column has-text-centered">
          <h2 class="title  has-text-centered">BioHiTech Digester Benefits</h2>
          <p class="has-text-centered">We are committed to solutions that have a positive environmental impact.</p>
          <br>
        </div>
      </div>
      <div class="columns has-text-centered is-multiline is-mobile">
        <div class="column is-one-third-tablet is-half-mobile has-text-centered" v-for="(col, key) in cols" :key="key">
          <div class="box float ">
            <b-icon size="is-large" :icon="col.icon" :class="`has-text-${col.color}`"/>
            <br>
            <p class="default"><strong class="is-size-5">{{col.title}}</strong></p>
            <p class="default is-size-6">{{col.content}}</p>
            <nuxt-link class="is-size-6" v-if="!!col.link" :to="col.link.url">{{col.link.text}}</nuxt-link>
          </div></div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "d-benefits",
    data() {
      return {
        cols: [
          {
            icon: 'cash-multiple',
            title: "Reduced Waste Cost",
            content: "Reduces hauling costs by eliminating food waste on-site.",
            color: 'success'
          }, {
            icon: 'cart-outline',
            title: "Measures Food Waste",
            content: "Capture sophisticated utilization & waste diversion metrics.",
            color: 'link'
          }, {
            icon: 'heart-outline',
            title: "Eco Friendly",
            content: "Natural green technology diverts food waste from distant landfills.",
            color: 'danger'
          }, {
            icon: 'lightbulb-outline',
            title: "Easy To Use",
            content: "No grinding or pre-processing required. No solids to manage after digestion.",
            color: 'warning'
          }, {
            icon: 'thumb-up-outline',
            title: "No Upfront Costs",
            content: "Economical monthly subscription plans are available.",
            color: 'success'
          }, {
            icon: 'atom',
            title: "Safe & Odorless",
            content: "Odorless, requiring no chemical additives. Sealed enclosure keeps pests away.",
            color: 'info'
          },
        ]
      }
    }
  }
</script>

<style scoped lang="sass">

  @media screen and (min-width: 961px)
    .column .box
      padding-right: 3rem
      padding-left: 3rem
      border-right: 1px solid #dddddd
      &:last-child
        border-right: none
</style>


