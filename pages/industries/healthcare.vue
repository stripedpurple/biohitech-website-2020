<template>
  <div>
    <section class="hero is-primary is-large hero-healthcare">
      <div class="hero-body">
        <p class="subtitle">BIOHITECH</p>
        <h1 class="title is-size-1-desktop">Helping Hospitals and Healthcare Facilities Reduce their Environmental Impact & Health Risk Exposure</h1>
        <nuxt-link class="button is-light is-outlined" to="/contact">Contact Us to Learn More&nbsp;&nbsp;&nbsp;&nbsp;<b-icon
          icon="arrow-right" size="is-small"/>
        </nuxt-link>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-7">
            <p class="subtitle">Sustainable And Safe</p>

            <h2 class="title">Mitigating Health Risks and Food Waste Across the Healthcare Industry</h2>


            <p>There are more than <a href="https://www.aha.org/statistics/fast-facts-us-hospitals" target="_blank"
                                      rel="noreferrer noopener">6,000 hospitals</a> in the U.S. They face unprecedented
              challenges for treating COVID affected patients while ensuring sanitary environments. Additionally, food
              waste disposal continues to have a negative environmental impact on these same facilities. Our suite of
              solutions was built to tackle these complex problems.
            </p>
          </div>

          <div class="column is-offset-1-desktop is-4">
            <figure class="image is-3by2"><img loading="lazy" src="/img/hospital-500.jpg"
                                               alt="Photo of Hospital Exterior"></figure>
          </div>
        </div>
      </div>
    </section>

    <hc-points/>

    <meta-tags title="Healthcare Solutions"
               description="Food Digesters for Hospitals and Healthcare Facilities. The EPA estimates that in 2017, the United States produced more than 40 million tons of food waste."/>
  </div>
</template>

<script>
  export default {
    name: "index",
  }
</script>

