<template>
  <section class="section">
    <div class="container">
      <b-dropdown :triggers="['hover']" aria-role="list">
        <button class="button is-info" slot="trigger">
          <span>Hover me!</span>
          <b-icon icon="menu-down"></b-icon>
        </button>

        <b-dropdown-item aria-role="listitem">Action</b-dropdown-item>
        <b-dropdown-item aria-role="listitem">Another action</b-dropdown-item>
        <b-dropdown-item aria-role="listitem">Something else</b-dropdown-item>
      </b-dropdown>
    </div>
  </section>
</template>

<script>
  export default {
    name: "test"
  }
</script>

<style scoped>

</style>
