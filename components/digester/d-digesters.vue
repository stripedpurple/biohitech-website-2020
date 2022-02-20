<template>
  <section class="section has-background-light">
    <div class="container">
      <!--  Smaller Machines    -->
      <div class="columns is-multiline">
        <div class="column is-offset-1 is-one-third is-hidden-tablet">
          <figure class="image is-4by5">
            <img loading="lazy" src="/img/sprout-light.jpg" alt="">
          </figure>
        </div>
        <div class="column is-7">
          <p class="subtitle">OUR MACHINES</p>

          <h2 class="title">BioHiTech Seed® & BioHiTech Sprout®</h2>
          <p>Offering a cloud-based technology solution using powerful analytics to affect sustainable and profitable
            changes in the reduction of food waste generation.</p>

          <p>Small, compact machines that can process up to 650 lbs (300 kg) of food waste per day.</p>

          <p>About the size of a copier, these models are perfect for low-volume businesses with space constraints.</p>

          <p><strong>BioHiTech Cloud®&nbsp;& — Analytics for Food Waste Treatment Machines</strong></p>
          <p>When you lease one of our digesters, you get access to BioHiTech Cloud® for free. BioHiTech Cloud®
            <nuxt-link to="/digesters/cloud">analyzes the type and amount of waste</nuxt-link>
            that your digester processes.
          </p>

          <p>With easy-to-understand trends and analytics, you can improve your waste performance and save</p>

          <b-button type="is-primary" outlined aria-controls="small-specs"
                    @click="smallSpecOpen=!smallSpecOpen">More Details
          </b-button>

          <b-button tag="nuxt-link" to="/digesters/cloud" type="is-primary">About Analytics</b-button>
        </div>

        <div class="column is-offset-1 is-one-third is-hidden-mobile">
          <figure class="image is-4by5">
            <img loading="lazy" src="/img/sprout-light.jpg" alt="">
          </figure>
        </div>

        <div class="column is-full" aria-label="small-specs">
          <b-collapse :open="smallSpecOpen" aria-id="contentIdForA11y1">
            <div class="box overflow">
              <p class="title is-size-4 has-text-centered">
                Seed & Sprout Details
              </p>
              <table class="table is-bordered is-fullwidth is-hoverable">
                <thead>
                <tr>
                  <th class="has-text-centered" colspan="2"><strong>Model</strong></th>
                  <th class="has-text-centered" colspan="2"><strong>Seed</strong></th>
                  <th class="has-text-centered" colspan="2"><strong>Sprout</strong></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td colspan="2"><strong>24 Hour Capacity</strong></td>
                  <td>up to<br> 500 lbs</td>
                  <td>up to<br> 227 kg</td>
                  <td>up to<br> 650 lbs</td>
                  <td>up to<br> 295 kg</td>
                </tr>
                <tr>
                  <td rowspan="3"><strong>Dimensions</strong></td>
                  <td><strong>Width</strong></td>
                  <td>30 in</td>
                  <td>76 cm</td>
                  <td>40 in</td>
                  <td>102 cm</td>
                </tr>
                <tr>
                  <td><strong>Depth</strong></td>
                  <td>30 in</td>
                  <td>76 cm</td>
                  <td>30 in</td>
                  <td>76 cm</td>
                </tr>
                <tr>
                  <td><strong>Height</strong></td>
                  <td>48 in</td>
                  <td>123 cm</td>
                  <td>48 in</td>
                  <td>123 cm</td>
                </tr>
                <tr>
                  <td colspan="2"><strong>Weight</strong></td>
                  <td>535 lbs</td>
                  <td>240 kg</td>
                  <td>670 lbs</td>
                  <td>304 kg</td>
                </tr>
                <tr>
                  <td colspan="2"><strong>Power Source</strong></td>
                  <td class="has-text-centered" colspan="2">United States: 115 Volt</td>
                  <td class="has-text-centered" colspan="2">International: 230 Volt</td>
                </tr>
                <tr>
                  <td colspan="2"><strong>Spec Sheet</strong></td>
                  <td colspan="4" class="has-text-centered">
                    <a href="/pdf/Revolution Flyer 2-18-20.pdf">
                      <b-icon icon="pdf-box"/>
                      Download PDF
                    </a>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </b-collapse>
        </div>
      </div>


      <!--   Large Machines   -->
      <div class="columns is-multiline">
        <div class="column is-one-third">
          <figure class="image is-5by4">
            <img loading="lazy" src="/img/sequoia-light.jpg" alt="">
          </figure>
        </div>

        <div class="column is-7 is-offset-1">
          <p class="subtitle">OUR BIGGER MACHINES</p>

          <h2 class="title">BioHiTech Sapling® & BioHiTech Sequoia®</h2>
          <p>Large, high volume machines that can process up to 2400 lbs (1100 kg) of food waste per day. They also come
            equipped with our cloud-based technology solution to reduce food waste generation.</p>

          <p>Great for manufacturers, grocery stores, cafeterias, prisons, or other large facilities.</p>


          <p><strong>BioHiTech Cloud®&nbsp;& — Analytics for Food Waste Treatment Machines</strong></p>

          <p>When you lease one of our digesters, you get access to BioHiTech Cloud® for free. BioHiTech Cloud®
            <nuxt-link to="/digesters/cloud">analyzes
              the type and amount of waste
            </nuxt-link>
            that your digester processes.
          </p>

          <p>With easy-to-understand trends and analytics, you can improve your waste performance and save
            resources.</p>

          <b-button type="is-primary" outlined aria-controls="large-specs"
                    @click="largeSpecOpen=!largeSpecOpen">More Details
          </b-button>

          <b-button tag="nuxt-link" to="/digesters/cloud" type="is-primary">About Analytics</b-button>
        </div>

        <div class="column is-full" aria-label="large-specs">
          <b-collapse :open="largeSpecOpen" aria-id="contentIdForA11y1">
            <div class="box overflow">
              <p class="title is-size-4 has-text-centered">
                Sapling and Sequoia Details
              </p>

              <table class="table is-bordered is-hoverable is-fullwidth has-text-centered">
                <thead class="bg-green has-text-centered">
                <tr>
                  <th class="has-text-centered" colspan="2"><strong>&nbsp;</strong></th>
                  <th class="has-text-centered" colspan="2"><strong>BioHiTech Sapling®</strong></th>
                  <th class="has-text-centered" colspan="2"><strong>BioHiTech Sequoia®</strong></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td colspan="2"><strong>24 Hour Capacity</strong></td>
                  <td>up to<br> 800 lbs</td>
                  <td>up to<br> 364 kg</td>
                  <td>up to<br> 2400 lbs</td>
                  <td>up to<br> 1090 kg</td>
                </tr>
                <tr>
                  <td rowspan="3"><strong>Dimensions</strong></td>
                  <td><strong>Width</strong></td>
                  <td>50 in</td>
                  <td>127 cm</td>
                  <td>69.25 in</td>
                  <td>176 cm</td>
                </tr>
                <tr>
                  <td><strong>Depth</strong></td>
                  <td>30 in</td>
                  <td>76 cm</td>
                  <td>44.25 in</td>
                  <td>113 cm</td>
                </tr>
                <tr>
                  <td><strong>Height</strong></td>
                  <td>49 in</td>
                  <td>124 cm</td>
                  <td>55.25 in</td>
                  <td>141 cm</td>
                </tr>
                <tr>
                  <td colspan="2"><strong>Weight</strong></td>
                  <td>780 lbs</td>
                  <td>354 kg</td>
                  <td>1680 lbs</td>
                  <td>760kg</td>
                </tr>
                <tr>
                  <td colspan="2"><strong>Power Source</strong></td>
                  <td colspan="2">United States: 115 Volt</td>
                  <td colspan="2">United Kingdom: 230 Volt</td>
                </tr>
                <tr>
                  <td colspan="2"><strong>Spec Sheet</strong></td>
                  <td colspan="4" class="has-text-centered">
                    <a href="/pdf/Revolution Flyer 2-18-20.pdf">
                      <b-icon icon="pdf-box"/>
                      Download PDF
                    </a>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </b-collapse>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "d-digesters",
    data() {
      return {
        smallSpecOpen: false,
        largeSpecOpen: false
      }
    }
  }
</script>

<style scoped lang="sass">
  .overflow
    overflow-x: scroll

</style>
