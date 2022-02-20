<template>
  <b-button type="is-primary" outlined @click="back">Go Back</b-button>
</template>

<script>
  import boxbtn from '~/components/BoxButton'

  export default {
    name: 'BackButton',

    methods: {
      back() {
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
      }
    }
  }
</script>
