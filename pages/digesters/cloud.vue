<template>
  <div>
    <c-hero/>
    <c-smart-waste/>
    <div class="container">
      <hr>
    </div>
    <c-benefits/>
    <c-features/>
    <c-cirrus/>

    <meta-tags title="Food Waste Analytics Cloud"
               description="Change Your Resource Use With Food Waste Management Technology"
               img="/img/cloud-banner.jpg"
               :url="this.$route.fullPath"/>
  </div>
</template>

<script>
  export default {
    name: "cloud"
  }
</script>

<style scoped>

</style>
