<template>
  <div>
    <section class="hero hero-schools is-primary is-large hero-restaurants">
      <div class="hero-body">
        <p class="subtitle">BIOHITECH</p>
        <h1 class="title is-size-1-desktop">Helping Schools Reduce their Environmental Impact & Health Risk
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
            <p class="subtitle">HEALTH AND SAFETY</p>

            <h2 class="title">Mitigating Health Risks and Food Waste in Schools</h2>

            <p>From elementary schools to universities across the globe, we are dedicated to building environmentally
              friendly solutions to empower them to drive a meaningful impact for change. We are helping these
              institutions reduce food waste and landfill usage, create renewable fuel, and achieve medical sanitary
              conditions to protect their students and faculty against bacteria in their classrooms, cafeterias, and
              gyms.</p>
          </div>

          <div class="column is-offset-1-desktop is-4">
            <figure class="image is-square">
              <img class="" loading="lazy" src="/img/schools-2.jpg"
                   alt="Photo of Food Preparation"></figure>
          </div>
        </div>
      </div>
    </section>

    <s-points/>

    <meta-tags title="Disinfecting Schools and Universities"
               description="From elementary schools to universities across the globe, we are dedicated to building environmentally
              friendly solutions to empower them to drive a meaningful impact for change. We are helping these
              institutions reduce food waste and landfill usage, create renewable fuel, and achieve medical sanitary
              conditions to protect their students and faculty against bacteria in their classrooms, cafeterias, and
              gyms."/>
  </div>
</template>

<script>
  export default {
    name: "restaurants",
  }
</script>
