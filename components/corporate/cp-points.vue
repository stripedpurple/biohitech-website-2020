<template>
  <section class="section has-background-light">
    <div class="container is-fullhd">
      <div class="columns">
        <div class="column">
          <h2 class="title has-text-centered">BioHiTech Benefits</h2>
          <p class="has-text-centered">We are committed to solutions that have a positive environmental impact.</p>
          <br>
          <chat-bubble-tabs :tabs="cols"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "hc-points",
    data() {
      return {
        cols: [
          {
            label: "Why Digesters?",
            content: `<div class="columns is-multiline">
                        <div class="column is-full"><p class="title has-text-centered">Empowering corporations to reduce their environmental
                          impact</p>

                          <p>Corporate Social Responsibility has become increasingly important as we face unprecedented environmental
                            challenges.
                            In the U.S., food waste is estimated at between 30 - 40% of the food supply, and businesses nationwide contribute
                            to
                            that staggering number. As businesses look to implement sustainable business practices, reducing food waste will
                            be
                            prominent. Introducing a Revolution Series Digester into your waste management process can help build sustainable
                            business practices and eliminate unnecessary food waste.</p></div>

                        <div class="column is-half">
                          <p class="title is-size-4 pr-4-tablet">Reduced waste management costs</p>
                          <p class="pr-4-tablet">The Revolution Series enables corporate cafeterias to reduce the costs of disposing food waste
                            at landfills. By eliminating food waste on site, you will have less waste that needs to be transported which will
                            decrease hauling costs</p>
                        </div>

                        <div class="column is-half">
                          <p class="title is-size-4 pl-4-tablet">Lower cost of ownership</p>
                          <p class="pl-4-tablet">We require no capital investment or upfront costs to use our food waste digesters. Our rental
                            plans enable you to save immediately and include the BioHiTech Cloud data platform.</p>
                        </div>

                        <div class="column is-half">
                          <p class="title is-size-4 pr-4-tablet">Create a culture with less waste</p>
                          <p class="pr-4-tablet">Attracting the right talent is important, and showing that your company has sustainable
                            business
                            practices reflects good corporate social responsibility. You will stand out from other employers by demonstrating
                            that you care about making a positive contribution to the world with less waste.</p>
                        </div>
                      </div>`,
          }, {
            label: "Why Altapure Disinfection Solutions?",
            content: `<div class="columns is-multiline">
                        <div class="column is-full">
                          <p class="title has-text-centered">Helping corporations ensure their workplaces are free from bacteria and
                            viruses</p>

                          <p>Returning back to our physical work locations in a post-COVID world offers unprecedented challenges for
                            employers.
                            They will need to rethink their policies and redesign their workspaces to mitigate the spread of health risks.</p>

                          <p>By introducing our Altapure AP-4™ into their protective measures, businesses can rest assured that their
                            workplaces
                            will be free from viruses, bacteria, and bacterial spores within 10 minutes of usage. The Altapure AP-4™ provides
                            a
                            high-level disinfectant technology for use against bacteria and viruses such as #Coronavirus 2 (SARS-CoV-2). Our
                            environmentally friendly technologies help protect and meet the demanding needs of health and safety at scale.</p>
                        </div>
                        <div class="column is-half">
                          <p class="title is-size-4 pr-4-tablet">Rapid complete kill of pathogens</p>
                          <p class="pr-4-tablet">The Altapure AP-4™ technology delivers a complete elimination of viruses, bacteria, and
                            bacterial spores, in less than 10 minutes of exposure. Treated surfaces have been clinically proven to show “no
                            growth” for bacterial spores, vegetative bacteria, and viruses.</p>
                        </div>

                        <div class="column is-half">
                          <p class="title is-size-4 pl-4-tablet">Maintaining a healthy work environment</p>
                          <p class="pl-4-tablet">As employees return to their physical workspaces, they will demand that employers ensure that
                            their businesses will not compromise their health. The Altapure AP-4™ provides medical grade sanitary conditions,
                            the same that are used in hospitals, that can keep your staff safe and healthy.</p>
                        </div>

                        <div class="column is-half">
                          <p class="title is-size-4 pr-4-tablet">Low cost of ownership</p>
                          <p class="pr-4-tablet">We require no capital investment or upfront costs for the use of the Altapure AP-4™.</p>
                        </div>
                      </div>`,
          }, {
            label: 'Why Renewables?',
            content: `<div class="columns">
                        <div class="column">
                          <p class="title has-text-centered">Convert your waste into renewable energy to become a truly environmentally
                            sustainable facility.</p>

                          <p>We provide a proven, cost-effective, and clean alternative to landfills for the disposal of solid waste
                            throughout
                            the United States. The High Efficiency Biological Treatment (HEBioT™) process utilizes a combination of automated
                            sorting equipment, enhanced biological composting, and mechanical refinement to convert waste into an EPA
                            recognized,
                            clean alternative fuel while achieving as much as 80% landfill diversion.</p>

                          <ul>
                            <li class="has-text-weight-bold">Reduce your carbon footprint</li>
                            <li class="has-text-weight-bold">Promote your sustainable waste management plan</li>
                          </ul>

                          <p>Waste that would otherwise be landfilled is converted into a sustainable fuel partially replacing the use of
                            fossil
                            fuels which can preserve our natural resources and reduce the harmful emissions to the environment.</p>

                        </div>
                      </div>`,
          },
        ]
      }
    }
  }
</script>

<style scoped lang="sass"></style>
