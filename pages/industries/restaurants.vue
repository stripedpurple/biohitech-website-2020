<template>
  <div>
    <section class="hero is-primary is-large hero-restaurants">
      <div class="hero-body">
        <p class="subtitle">BIOHITECH</p>
        <h1 class="title is-size-1-desktop">Helping Restaurants Reduce their Environmental Impact & Health Risk
          Exposure</h1>
        <nuxt-link class="button is-light is-outlined" to="/contact">Contact Us to Learn More&nbsp;&nbsp;&nbsp;&nbsp;
          <b-icon icon="arrow-right" size="is-small"/>
        </nuxt-link>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column">
            <p class="subtitle">SUSTAINABLE AND SAFE</p>

            <h2 class="title">Mitigating Health Risks and Food Waste Across the Healthcare Industry</h2>

            <p>Restaurants are facing new challenges when it comes to health and sanitation. Having been linked to the
              spread of COVID-19, they will need to incorporate intense safety measures to minimize health risks. When
              it comes to their environmental impact, this is also a glaring issue.
              The U.S. spends over $218 billion growing, processing, transporting, and disposing of uneaten food. The
              restaurant industry generates <a href="https://www.refed.com/downloads/Restaurant_Guide_Web.pdf"
                                               target="_blank" rel="noreferrer noopener">
                11.4 million tons of food</a> waste annually, which greatly contributes to that
              number. This trend costs the sector more than $25 billion each year. Our suite of solutions was built to
              tackle these complex problems.
            </p>
          </div>

          <div class="column is-offset-1-desktop is-4">
            <figure class="image is-4by5">
              <img class="pl-4-tablet " loading="lazy" src="/img/max-delsid-oBwnHsjCx9A-unsplash.jpg"
                                               alt="Photo of Food Preparation"></figure>
          </div>
        </div>
      </div>
    </section>

    <rs-points/>

    <meta-tags title="Restaurant Food Waste Management"
               description="The restaurant industry generates 11.4 million tons of food waste every year, costing more than $25 billion, according to ReFED, an anti-food waste initiative."/>
  </div>
</template>

<script>
  export default {
    name: "restaurants",
  }
</script>
