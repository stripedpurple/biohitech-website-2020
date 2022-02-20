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
            content: `
           <div class="columns is-multiline">
            <div class="column is-full">
            <p class="title has-text-centered">Help Your Healthcare Facility Reduce Food Waste </p>
              <p>Hospitals also generate approximately
              <a href="https://www.epa.gov/sustainable-management-food/wasted-food-programs-and-resources-across-united-states"
              target="_blank" rel="noreferrer noopener">three pounds</a>
               of food waste per bed each day, contributing to the growing
                waste management problem in the U.S. Introducing a Revolution Series food digester into your waste management
                process can help reduce your daily impact on the environment. It’s time to take control of your healthcare
                facility’s food waste and dispose what is left of it in a more cost-effective way.</p>
            </div>

            <div class="column is-half">
              <p class="title is-size-4 pr-4-tablet">Reduced Waste Management Costs</p>
              <p class="pr-4-tablet">The Revolution Series enables healthcare facilities to reduce the costs of disposing food waste at landfills. By
                eliminating food waste on site, you will have less waste that needs to be transported which will decrease hauling
                costs.</p>
            </div>

            <div class="column is-half">
              <p class="title is-size-4 pl-4-tablet">Lower cost of ownership</p>
              <p class="pl-4-tablet">We require no capital investment or upfront costs to use our food waste digesters. Our rental plans enable you to
                save immediately and include the BioHiTech Cloud data platform.</p>
            </div>

            <div class="column is-half">
              <p class="title is-size-4 pr-4-tablet">Divert Your Food Waste From Landfills</p>
              <p class="pr-4-tablet">The BioHiTech food digester processes food waste on site using a combination of microorganisms, oxygen and warm
                water
            </div>

            <div class="column is-half">
              <p class="title is-size-4 pl-4-tablet">Plan patient menus around food waste reduction</p>
              <p class="pl-4-tablet">With a Revolution Digester, you can create and revise menus based on your patient’s food waste habits.</p>
            </div>

            <div class="column is-half">
              <p class="title is-size-4 pr-4-tablet">Use data analytics to manage your food waste</p>
              <p class="pr-4-tablet">Tap into the power of BioHiTech Cloud® to understand how your healthcare facility handles food waste. Every
                Revolution Digester connects to the BioHiTech Cloud, a platform that measures its performance. The BioHiTech Cloud
                shows the amount of food waste you process every day in real-time to help you optimize your kitchen waste
                disposal.</p>
            </div>

            <div class="column is-half">
              <p class="title is-size-4 pl-4-tablet">Set benchmarks for Waste Diversion</p>
              <p class="pl-4-tablet">The BioHiTech Cloud measures the amount of food waste you digest and can compare those results against multiple
                digesters in various locations. If you have multiple facilities or cafeterias, you can set goals for the
                percentage of waste that they digest. These benchmarks encourage every digester user to optimize their
                food waste management process.</p>
            </div>

            <div class="column is-half">
              <p class="title is-size-4 pr-4-tablet">Optimize supply purchasing</p>
              <p class="pr-4-tablet">By tracking your supply purchasing alongside BioHiTech Cloud® data, you can focus on buying less items that lead
                to
                that waste.</p>
            </div>

          </div>
            `,
          }, {
            label: "Why Altapure Disinfection Solutions?",
            content: `<div class="columns is-multiline">
                        <div class="column is-full">
                          <p class="title has-text-centered">
                            Ensuring Sanitary Environments for Healthcare Facilities
                          </p>
                          <p>Hospitals are treating COVID affected patients on a massive scale. Maintaining sanitary environments is crucial
                            for ensuring health and safety standards. By introducing our Altapure AP-4™ into these safety measures, hospital
                            managers can rest assured that they are protecting their staff and patients while reducing the spread of COVID-19,
                            viruses, and other harmful bacteria.</p>
                        </div>
                        <div class="column is-half">
                          <p class="title is-size-4 pr-4-tablet ">Rapid complete kill of pathogens</p>
                          <p class="pr-4-tablet ">The Altapure AP-4™ technology delivers a complete elimination of viruses, bacteria, and bacterial spores, in less
                            than 10 minutes of exposure. Treated surfaces have been clinically proven to show “no growth” for bacterial
                            spores, vegetative bacteria, and viruses.</p>
                        </div>
                        <div class="column is-half">
                          <p class="title is-size-4 pl-4-tablet ">Complete control</p>
                          <p class="pl-4-tablet ">The AP-4 ™ is remotely operated using a small and lightweight, hand held “Control Tablet” that is touch screen
                            activated. It communicates via a wireless connection with one or more AP-4 ™ machines and ancillary devices. The
                            wireless Control Tablet is approved for use in all medical, industrial, and scientific environments.</p>
                        </div>
                        <div class="column is-half">
                          <p class="title is-size-4 pr-4-tablet ">Compact and wireless</p>
                          <p class="pr-4-tablet ">It is a single compact unit (aerosol generator + vapor removal system) and has complete coverage accuracy leaving
                            no human interaction required.</p>
                        </div>
                        <div class="column is-half">
                          <p class="title is-size-4 pl-4-tablet ">Low cost of ownership</p>
                          <p class="pl-4-tablet ">We require no capital investment or upfront costs for the use of the Altapure AP-4™.</p>
                        </div>
                        <div class="column is-full">
                          <p>Altapure’s process delivers a complete elimination of viruses, bacteria, and bacterial spores, in less than 10
                            minutes of exposure. The Altapure AP-4™ provides a high-level disinfectant technology for use against bacteria and
                            viruses such as Coronavirus 2 (SARS-CoV-2). Our environmentally friendly technologies help protect and meet the
                            demanding needs of health and safety at scale.</p>
                        </div>
                      </div>
                        `,
          }, {
            label: 'Why Renewables?',
            content: `
            <div class="columns is-multiline">
              <div class="column">
                <p class="title has-text-centered">Convert your waste into renewable energy to become a truly environmentally sustainable healthcare facility.</p>
                <p>We provide a proven, cost-effective, and clean alternative to landfills for the disposal of solid waste
                  throughout the U.S. The High Efficiency Biological Treatment (HEBioT™) process utilizes a combination of automated
                  sorting equipment, enhanced biological composting, and mechanical refinement to convert waste into an EPA
                  recognized, clean alternative fuel while achieving as much as 80% landfill diversion.</p>
                <ul>
                  <li class="has-text-weight-bold">Reduce your carbon footprint</li>
                  <li class="has-text-weight-bold">Promote your sustainable waste management plan</li>
                </ul>
                <p>Waste that would otherwise be landfilled is converted into a sustainable fuel partially replacing the use of
                  fossil fuels which can preserve our natural resources and reduce the harmful emissions to the environment.</p>

              </div>
            </div>
            `,
          },
        ]
      }
    }
  }
</script>

<style scoped lang="sass"></style>
