<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column ">
          <h2 class="title has-text-centered">Divert food waste in three easy steps…</h2>
          <br>
        </div>
      </div>
      <div class="columns box float has-text-centered">
        <div class="column is-one-third">
          <img loading="lazy" src="/img/compost-icon.svg" alt="" class="image is-64x64 has-margin-auto">
          <br>
          <p class="default"><strong class="is-size-4">Add</strong></p>
          <p class="default">Simply add food waste throughout the day. The Digester can process most food items with no grinding or
            pre-processing required.</p>
        </div>
        <div class="column is-one-third">
          <img loading="lazy" src="/img/digester-icon.svg" alt="" class="image is-64x64 has-margin-auto">
          <br>
          <p class="default"><strong class="is-size-4">Digest</strong></p>
          <p class="default">Aerobic digestion technology uses a proprietary blend of microorganisms to naturally break down food waste
            into liquid form.</p>
        </div>
        <div class="column is-one-third">
          <img loading="lazy" src="/img/leaf-icon.svg" alt="" class="image is-64x64 has-margin-auto">
          <br>
          <p class="default"><strong class="is-size-4">Drain</strong></p>
          <p class="default">Once food waste is completely broken down it is safely discharged as wastewater through any standard sewer
            line. Complete diversion from landfill.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
        name: "d-add-acro"
    }
</script>

<style scoped lang="sass">

  p
    text-align: center

  @media screen and (min-width: 961px)
    .column
      padding-right: 3rem
      padding-left: 3rem
      border-right: 1px solid #dddddd
      &:last-child
        border-right: none
</style>



