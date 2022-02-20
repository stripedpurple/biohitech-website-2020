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
                        <div class="column is-full">
                          <p class="title has-text-centered">Help your school reduce food waste while educating tomorrow’s leaders.</p>
                        </div>

                        <div class="column is-half">
                          <p class="title is-size-4 pr-4-tablet">Reduced waste management costs</p>
                          <p class="pr-4-tablet">The Revolution Series enables schools to reduce the costs of disposing food waste at
                            landfills. By eliminating food
                            waste on site, you will have less waste that needs to be transported which will decrease hauling costs.</p>
                        </div>
                        <div class="column is-half">
                          <p class="title is-size-4 pl-4-tablet">Lower cost of ownership</p>
                          <p class="pl-4-tablet">We require no capital investment or upfront costs to use our food waste digesters. Our rental
                            plans enable you to
                            save immediately and include the BioHiTech Cloud data platform.</p>
                        </div>
                        <div class="column is-half">
                          <p class="title is-size-4 pr-4-tablet">Serve food that your students will eat</p>
                          <p class="pr-4-tablet">Your digester data can help you determine which foods on your menu succeed more than others.
                            If you offer a special
                            on a certain day and you notice more food waste, your students may not prefer that menu option. With careful data
                            monitoring you can work towards serving food that is eaten and less that is wasted.</p>
                        </div>
                        <div class="column is-half">
                          <p class="title is-size-4 pl-4-tablet">Turn cafeterias into classrooms</p>
                          <p class="pl-4-tablet">Our food waste digesters collect important data that can help raise awareness about the real
                            impact your school has
                            on the environment and be used to teach students that their efforts can help build a better world with less
                            waste.</p>
                        </div>
                        <div class="column is-half">
                          <p class="title is-size-4 pr-4-tablet">Optimize supply purchasing</p>
                          <p class="pr-4-tablet">By tracking your supply purchasing alongside BioHiTech Cloud® data, you can focus on buying
                            less items that lead to
                            that waste.</p>
                        </div>
                        <div class="column is-half">
                          <p class="title is-size-4 pl-4-tablet">Plan student menus around food waste reduction</p>
                          <p class="pl-4-tablet">With a Revolution Digester, you can create and revise menus based on your student’s food waste
                            habits.</p>
                        </div>
                        <div class="column is-half">
                          <p class="title is-size-4 pr-4-tablet">Use data analytics to manage your food waste</p>
                          <p class="pr-4-tablet">Tap into the power of BioHiTech Cloud® to understand how your school handles food waste. Every
                            Revolution Digester
                            connects to the BioHiTech Cloud, a platform that measures its performance. The BioHiTech Cloud shows the amount of
                            food waste you process every day in real time to help you optimize your kitchen waste disposal.</p>
                        </div>
                        <div class="column is-full">
                        <br><br>
                          <p class="has-text-centered"><a class="button px-6 is-primary is-medium chat" href="/digesters">Read More</a></p>

                          <p class="">The World Wildlife Fund estimates that U.S. school food waste totals <a
                            href="https://www.worldwildlife.org/stories/food-waste-warriors" target="_blank" rel="noreferrer noopener">530,000
                            tons per year</a>, costing as much as $9.7 million a day to manage. Schools serve more than 4 billion lunches
                            per year in the US. By introducing a Revolution Series food digester into their waste management process, schools
                            can control the amount of food waste they generate and dispose of what is left in a more cost-effective way. This
                            solution offers an opportunity to turn cafeterias into classrooms so students can measure the magnitude of this
                            issue with real-time data and analytics. Educating students with data and awareness can empower the next
                            generation of children and their communities to work towards combating food waste.</p>
                        </div>
                      </div>`,
          }, {
            label: "Why Altapure Disinfection Solutions?",
            content: `<div class="columns is-multiline">
                        <div class="column is-full">
                          <p class="title has-text-centered">Innovative Technology to Reduce Health Threats for Schools and Universities</p>

                          <p>As children and teachers return to school, administrators will be faced with unprecedented challenges to ensure
                            their
                            safety in our post-COVD world. Introducing our Altapure AP-4™ into these safety measures can provide the right
                            medical
                            and sanitary conditions to protect students and teachers against bacteria in their classrooms, bathrooms,
                            cafeterias,
                            elevators, and gyms.</p>
                        </div>
                        <div class="column is-half">
                          <p class="title is-size-4 pr-4-tablet">Rapid complete kill of pathogens</p>
                          <p class="pr-4-tablet">The Altapure AP-4™ technology delivers a complete elimination of viruses, bacteria, and
                            bacterial
                            spores, in less
                            than 10 minutes of exposure. Treated surfaces have been clinically proven to show “no growth” for bacterial
                            spores,
                            vegetative bacteria, and viruses.</p>
                        </div>
                        <div class="column is-half">
                          <p class="title is-size-4 pl-4-tablet">Complete control</p>
                          <p class="pl-4-tablet">The AP-4 ™ is remotely operated using a small and lightweight, hand held “Control Tablet”
                            that is
                            touch screen
                            activated. It communicates via a wireless connection with one or more AP-4 ™ machines and ancillary devices. The
                            wireless Control Tablet is approved for use in all medical, industrial, and scientific environments.</p>
                        </div>
                        <div class="column is-half">
                          <p class="title is-size-4 pr-4-tablet">Compact and wireless</p>
                          <p class="pr-4-tablet">It is a single compact unit (aerosol generator + vapor removal system) and has complete
                            coverage
                            accuracy leaving no
                            human interaction required.</p>
                        </div>
                        <div class="column is-half">
                          <p class="title is-size-4 pl-4-tablet">Low cost of ownership</p>
                          <p class="pl-4-tablet">We require no capital investment or upfront costs for the use of the Altapure AP-4™.</p>
                        </div>
                        <div class="column is-full">

                        <br><br>
                          <p class="has-text-centered">
                            <a href="/altapure" class="button is-primary chat is-medium px-6">Read More</a>
                          </p>

                          <p>Altapure’s process delivers a complete elimination of viruses, bacteria, and bacterial spores, in less than 10
                            minutes of exposure. The Altapure AP-4™ provides a high-level disinfectant technology for use against bacteria
                            and
                            viruses such as Coronavirus 2 (SARS-CoV-2). Our environmentally friendly technologies help protect and meet the
                            demanding needs of health and safety at scale.</p>
                        </div>
                      </div>
                      `,
          }, {
            label: 'Why Renewables?',
            content: `<div class="columns is-multiline">
                        <div class="column">
                          <p class="title has-text-centered">Convert your waste into renewable energy to become a truly environmentally sustainable school.</p>

                          <p>We provide a proven, cost-effective, and clean alternative to landfills for the disposal of solid waste throughout
                            the United States. The High Efficiency Biological Treatment (HEBioT™) process utilizes a combination of automated
                            sorting equipment, enhanced biological composting, and mechanical refinement to convert waste into an EPA recognized,
                            clean alternative fuel while achieving as much as 80% landfill diversion.</p>

                          <ul>
                            <li class="has-text-weight-bold">Reduce your carbon footprint</li>
                            <li class="has-text-weight-bold">Promote your sustainable waste management plan</li>
                          </ul>

                          <p>Waste that would otherwise be landfilled is converted into a sustainable fuel partially replacing the use of fossil
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
