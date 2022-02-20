<template>

</template>

<script>
    export default {
        name: "teapot",
      mounted() {
          this.$nuxt.context.error({
            message: 'The server refuses to brew coffee because it is, permanently, a teapot.',
            statusCode: 418
          })
      }

    }
</script>

<style scoped>

</style>
