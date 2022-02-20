<template>
  <div>
    <d-hero/>
    <d-add-acro/>
    <d-digesters/>
    <d-benefits/>
    <d-stats/>

    <meta-tags title="Food Waste Measurement &amp; Disposal Digesters"
               description="Simple food waste reduction, backed by powerful cloud-based analytics. Affecting sustainable &amp; profitable changes in the reduction of food waste generation."
               img="/img/cash-in-hand-banner.jpg"
               :url="this.$route.fullPath"/>
  </div>
</template>

<script>
  export default {
    name: "index"
  }
</script>

<style scoped>

</style>
