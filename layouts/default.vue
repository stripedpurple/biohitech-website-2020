<template>
  <div>
    <Navigation/>
    <div class="main-content ">
      <nuxt/>
    </div>
    <bht-footer/>
    <noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1397555343970153&ev=PageView&noscript=1"/></noscript>
  </div>
</template>


<script>
  export default {
    name: 'Default',
    mounted() {
      console.log(document.referrer);
    }
  }
</script>

<style scoped lang="sass">
</style>
