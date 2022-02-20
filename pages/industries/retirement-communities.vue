<template>
  <div>
    <section class="hero is-primary is-large hero-retirement-communities">
      <div class="hero-body">
        <p class="subtitle">BIOHITECH</p>
        <h1 class="title is-size-1-desktop">Keeping Nursing Homes, Hospice Care, and Assisted and Independent Living
          Facilities Sanitary and Safe</h1>
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

            <h2 class="title">Maintain Clean and Environmentally Friendly Assisted Living Facilities</h2>

            <p>There are approximately <a href="https://www.ahcancal.org/ncal/facts/Pages/Communities.aspx"
                                          target="_blank" rel="noreferrer noopener">29,000 assisted living</a>
              communities in the U.S. which have been the hardest hit by COVID-19. Our medical-grade Altapure
              disinfectant technology protects residents and staff against the daily threat of viruses and bacteria.
              Additionally, food waste disposal continues to have a negative environmental impact on these same
              facilities.</p>
          </div>

          <div class="column is-offset-1-desktop is-4">
            <figure class="image is-4by5">
              <img class="pl-4-tablet " loading="lazy" src="/img/retirement-communities.jpg"
                   alt="Photo of Food Preparation"></figure>
          </div>
        </div>
      </div>
    </section>

    <rc-points/>

    <meta-tags title="Restaurant Food Waste Management"
               description="There are approximately 29,000 assisted living communities in the U.S. which have been the
               hardest hit by COVID-19.  Our medical-grade Altapure disinfectant technology protects residents and staff
               against the daily threat of viruses and bacteria. Additionally, food waste disposal continues to have a
               negative environmental impact on these same facilities."/>
  </div>
</template>

<script>
  export default {
    name: "restaurants",
  }
</script>
