<template>
  <div>
    <section class="hero is-primary is-large hero-corporate">
      <div class="hero-body">
        <p class="subtitle">BIOHITECH</p>
        <h1 class="title is-size-1-desktop">Environmental, Health and Safety Solutions that Drive Change for Corporations</h1>
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

            <h2 class="title">CREATE A CLEAN AND ENVIRONMENTALLY FRIENDLY WORKPLACE</h2>

            <p>Corporate Social Responsibility has become increasingly important as we face unprecedented environmental and health challenges. Employers will need to redesign their spaces to minimize their carbon footprint and mitigate viruses or bacteria from the workplace.
            </p>
            <p>
              Whether corporations are looking to implement more sustainable business practices, meet sustainability standards or introduce technology to ensure COVID free environments, our suite of trusted solutions were built to address these concerns.</p>
          </div>

          <div class="column is-offset-1-desktop is-4">
            <figure class="image is-square">
              <img class="pl-4-tablet " loading="lazy" src="/img/corporate.jpg"
                                               alt="Photo of Food Preparation"></figure>
          </div>
        </div>
      </div>
    </section>

    <cp-points/>

    <meta-tags title="Restaurant Food Waste Management"
               description="The restaurant industry generates 11.4 million tons of food waste every year, costing more than $25 billion, according to ReFED, an anti-food waste initiative."/>
  </div>
</template>

<script>
  export default {
    name: "restaurants",
  }
</script>
