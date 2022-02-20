<template>
  <section class="section">
    <div class="container">
      <div class="columns is-multiline">
        <div class="column is-one-third">
          <h3 class="title is-size-2"><span class="has-text-weight-normal">KEY FEATURES </span><br>
            AND OVERVIEW</h3>
        </div>
        <div class="column is-two-thirds" style="border-left: 5px solid #333333">
          <p style="padding-left: 1rem">The AP-4 ™ is a fully automated “one touch deploy ™” technology. The single compact unit, includes an
            effective vapor removal system that is built into the same housing as the aerosol generator, and is easily
            moved and setup by only one individual.</p>

          <p style="padding-left: 1rem">The AP-4 ™ system operates with a unique “closed loop control” of the entire treatment process, including
            use of one or more of Altapure’s patented HVAC vent control and cover system. These advanced features
            guarantee a fully validated, safe, and efficacious process.</p>
        </div>
        <div class="column is-full"><br></div>
      </div>

      <div class="columns">
        <div class="column is-one-third">
          <figure class="image is-4by5"><img loading="lazy" src="/img/residue-free.jpg" alt=""></figure>

          <div class="content">

          <ul>
            <li>Patient room turn time (entry to exit)</li>
            <li>100% Elimination: Spores * Viruses * Bacteria * Fungus™</li>
            <li>Gas-Like Interaction / 3-D Contact With Complex Surface Geometries</li>
          </ul>
          </div>
        </div>

        <div class="column is-one-third">
          <figure class="image is-4by5"><img loading="lazy" src="/img/wireless-control.jpg" alt=""></figure>

          <div class="content">

          <ul>
            <li>Single compact unit (aerosol generator + vapor removal system)</li>
            <li>“Extremely thin film” deposition with sub-micron aerosol</li>
            <li>Complete Coverage Accuracy (no human interaction)</li>
          </ul>
          </div>
        </div>

        <div class="column is-one-third">
          <figure class="image is-4by5"><img loading="lazy" src="/img/50-minute-turnaround.jpg" alt=""></figure>

          <div class="content">

          <ul>
            <li>Process meets EPA definition for: Hospital Disinfection / Sporicide.</li>
            <li>Wireless tablet control and data reporting to PC</li>
          </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "a-features",
    data() {
      return {
        activeTab: 0,
      }
    }
  }
</script>

<style scoped lang="sass">
  .image, .image>img
    border-radius: .5rem
</style>
