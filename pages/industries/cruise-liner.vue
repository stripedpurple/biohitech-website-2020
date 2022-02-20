<template>
  <div>
    <section class="hero hero-cruise has-background-primary is-large">
      <div class="hero-body">
        <p class="subtitle">BIOHITECH</p>
        <h1 class="title is-size-1-desktop">Helping Cruise Lines Reduce their Environmental Impact & Health Risk Exposure
        </h1>
        <nuxt-link class="button is-light is-outlined" to="/contact">Contact Us To Learn More&nbsp;&nbsp;&nbsp;&nbsp;
          <b-icon icon="arrow-right" size="is-small"/>
        </nuxt-link>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column">
            <p class="subtitle">Sustainable and Safe</p>

            <h2 class="title">Mitigating Health Risks and Food Waste on Cruise Ships</h2>


            <p>The cruise line Industry is constantly facing environmental and sustainability challenges.
              Emitting <a href="https://www.nytimes.com/2019/06/03/travel/traveling-climate-change.html?module=inline"
                          target="_blank" rel="noreferrer noopener">three to four times as much CO<sub>2</sub></a> per
              passenger-mile as commercial airplanes, cruise ships need to find new and sustainable ways to reduce their
              impact on the environment. In addition to reducing their carbon footprint, they will need to ensure the
              highest compliance of safety measures to mitigate the spread of COVID-19 on their ships. Our suite of
              solutions was built to tackle these complex problems.</p>
          </div>

          <div class="column is-offset-1-desktop is-4">
            <figure class="image is-4by5"><img class="pl-4-tablet" loading="lazy"
                                               src="/img/kevin-bluer-vNcRr-mUPTI-unsplash-4by5.jpg"
                                               alt="Photo of Docked Ship"></figure>
          </div>
        </div>
      </div>
    </section>

    <cl-points/>

    <meta-tags title="Food Waste Reduction at Sea | Cruise Lines & BioHiTech"
               description="The Cruise Line Industry is facing environmental, sustainability challenges. Emitting 3 to 4 times as much CO2 per passenger-mile as a commercial airplanes."/>
  </div>
</template>

<script>
  export default {
    name: "restaurants",
  }
</script>

<style scoped lang="sass"></style>
