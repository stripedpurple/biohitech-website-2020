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
                          <p class="title has-text-centered">Help your cruise ships reduce food waste and save
                          money</p>

                          <p>The time and cost associated with the removal of waste from ships at port has a considerable impact on operating
                            costs and performance, while creating less than favorable work environments. The Revolution Series Digester helps
                            cruise ships manage commercial food waste with real-time data and analytics. As they process kitchen waste on
                            site, Revolution Series Digesters measure the amount that they digest and generate accurate, easy-to-understand
                            statistics. Resulting in optimized supply costs through data-informed purchases. Our cost-effective digesters
                            enable you to divert food waste from landfills and improve your sustainability initiatives.</p>
                        </div>

                        <div class="column is-half">
                          <p class="title is-size-4 pr-4-tablet">Reduced waste management costs</p>
                          <p class="pr-4-tablet">The Revolution Series enables restaurants to reduce the costs of disposing food waste at
                            landfills. By eliminating
                            food waste on site, you will have less waste that needs to be transported from ports which will decrease hauling
                            costs.</p>
                        </div>

                        <div class="column is-half">
                          <p class="title is-size-4 pl-4-tablet">Lower cost of ownership</p>
                          <p class="pl-4-tablet">We require no capital investment or upfront costs to use our food waste digesters. Our rental
                            plans enable you to
                            save immediately and include the BioHiTech Cloud data platform.</p>
                        </div>

                        <div class="column is-half">
                          <p class="title is-size-4 pr-4-tablet">Divert your food waste from landfills</p>
                          <p class="pr-4-tablet">The BioHiTech food digester processes food waste on site using a combination of
                            microorganisms, oxygen and warm water
                            to digest it into a liquid called that drains into your wastewater line diverting it from landfill.</p>
                        </div>

                        <div class="column is-half">
                          <p class="title is-size-4 pl-4-tablet">Plan menus around food waste reduction</p>
                          <p class="pl-4-tablet">With a Revolution Digester, you can create and revise menus based on your patrons’ food waste
                            habits. Days and meal
                            times that result in higher digestion rates could indicate a menu that generates more waste. With this insight in
                            the BioHiTech Cloud, you can formulate a menu that focuses on food that will be consumed.</p>
                        </div>

                        <div class="column is-half">
                          <p class="title is-size-4 pr-4-tablet">Set benchmarks for Waste Diversion</p>
                          <p class="pr-4-tablet">The BioHiTech Cloud measures the amount of food waste you digest and can compare those results
                            against multiple
                            digesters on other ships. If you have multiple ships, you can set goals for the percentage of waste that they
                            digest.
                            These benchmarks encourage every digester user to optimize their food waste management process.</p>
                        </div>

                        <div class="column is-half">
                          <p class="title is-size-4 pl-4-tablet">Use Data Analytics to Manage Commercial Food Waste</p>
                          <p class="pl-4-tablet">Tap into the power of BioHiTech Cloud® to understand how your business handles food waste.
                            Every Revolution Digester
                            connects to the BioHiTech Cloud, a platform that measures its performance. The BioHiTech Cloud® gives you access
                            to
                            information about the food waste you process every day in real time, helping you optimize your kitchen waste
                            disposal.</p>
                        </div>

                        <div class="column is-half">
                          <p class="title is-size-4 pr-4-tablet">Optimize supply purchasing</p>
                          <p class="pr-4-tablet">By tracking your supply purchasing alongside BioHiTech Cloud® data, you can focus on buying
                            less items that lead to that waste.</p>
                        </div>

                      </div>`,
          }, {
            label: "Why Altapure Disinfection Solutions?",
            content: `<div class="columns is-multiline">
                        <div class="column is-full">
                          <p>As the cruise line industry recovers from the pandemic, companies will need to incorporate a new set of safety
                            measures to combat the potential spread of COVID-19 in their ships. By introducing our Altapure AP-4™ into these new
                            protocols, cruise lines can rest assured that they are protecting their staff and customers while reducing the spread
                            of COVID-19, viruses, and other harmful bacteria.</p>
                        </div>

                        <div class="column is-half">
                          <p class="title is-size-4 pr-4-tablet">Rapid complete kill of pathogens</p>
                          <p class="pr-4-tablet">The Altapure AP-4™ technology delivers a complete elimination of viruses, bacteria, and
                            bacterial spores, in less
                            than 10 minutes of exposure. Treated surfaces have been clinically proven to show “no growth” for bacterial spores,
                            vegetative bacteria, and viruses.</p>
                        </div>

                        <div class="column is-half">
                          <p class="title is-size-4 pl-4-tablet">Complete control</p>
                          <p class="pl-4-tablet">The AP-4 ™ is remotely operated using a small and lightweight, hand held “Control Tablet” that
                            is touch screen
                            activated. It communicates via a wireless connection with one or more AP-4 ™ machines and ancillary devices. The
                            wireless Control Tablet is approved for use in all medical, industrial, and scientific environments.</p>
                        </div>

                        <div class="column is-half">
                          <p class="title is-size-4 pr-4-tablet">Low cost of ownership</p>
                          <p class="pr-4-tablet">We require no capital investment or upfront costs for the use of the Altapure AP-4™.</p>
                        </div>

                        <div class="column is-half">
                          <p class="title is-size-4 pl-4-tablet">Compact and wireless</p>
                          <p class="pl-4-tablet">It is a single compact unit (aerosol generator + vapor removal system) and has complete
                            coverage accuracy leaving no
                            human interaction required.</p>
                        </div>

                        <div class="column is-full">
                          <p>Altapure’s process delivers a complete elimination of viruses, bacteria, and bacterial spores, in less than 10
                            minutes of exposure. The Altapure AP-4™ provides a high-level disinfectant technology for use against bacteria and
                            viruses such as Coronavirus 2 (SARS-CoV-2). Our environmentally friendly technologies help protect and meet the
                            demanding needs of health and safety at scale.</p>
                        </div>
                      </div>`,
          }, {
            label: 'Why Renewables?',
            content: `<div class="columns">
                        <div class="column">
                          <p class="title has-text-centered">Reduce your fleet’s carbon footprint by turning waste into renewable energy</p>

                          <p>We provide a proven, cost-effective, and clean alternative to landfills for the disposal of solid waste throughout
                            the U.S. The High Efficiency Biological Treatment (HEBioT™) process utilizes a combination of automated sorting
                            equipment, enhanced biological composting, and mechanical refinement to convert waste into an EPA recognized, clean
                            alternative fuel while achieving as much as 80% landfill diversion.</p>

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

