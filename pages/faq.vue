<template>
  <div>

    <!-- HERO -->
    <section class="hero is-info is-medium">
      <div class="hero-body">
        <div class="container">
        <h1 class="subtitle">FAQs</h1>
      <h2 class="title is-size-1-desktop">Answers to your Questions</h2>

        </div>
      </div>
    </section>


    <section class="section has-background-light">
      <div class="container">
        <div class="columns is-desktop is-multiline">
          <div class="column is-full">
            <p class="title has-text-centered">BioHiTech Digesters</p>
          </div>
<!--          <div class="column is-half-desktop" v-for="(faq,key) in digesterFaqs">-->
<!--            <faq-card :title="faq.title" :content="faq.content"></faq-card>-->
<!--          </div>-->
          <div class="column is-full">
            <accordian :items="digesterFaqs" contentBg="white"></accordian>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <b-tabs v-model="activeTab">
          <b-tab-item :label="tab.label" v-for="(tab,key) in renewableFaqs" :key="key">
            <div class="columns is-desktop is-multiline">
              <div class="column">
                <accordian :items="tab.faqs"></accordian>
              </div>
            </div>
          </b-tab-item>
        </b-tabs>
      </div>
    </section>
    <meta-tags title="FAQs" description="Everything you want to know about aerobic digestion, disinfecting foggers, coal alternatives, BioHiTech Digesters, Altapure, renewable energy, etc"/>
  </div>
</template>

<script>
  export default {
    name: "faq",
    data() {
      return {
        isOpen: 0,
        digesterFaqs: [
          {
            title: "Are the microorganisms safe?",
            content: "The microorganisms are perfectly safe, naturally-occurring and non-pathogenic, i.e. they do not cause disease. There are also no harmful effects to local drains or sewage systems. In effect the microorganisms boosts the population of beneficial bacteria in the system, and there would actually be beneficial effects further downstream."
          },
          {
            title: "How much food waste can I put in the Digester?",
            content: "The Digester can process up to 2,500 pounds of food waste over a 24 hour period but because it is a continuous feed process, the additions of food waste must be staged over the course of the 24 hours. Trying to put too much food waste into the Digester at one time will overload the machine and slow the digestion process. Operators should aim to add approximately 100 pounds per hour to achieve maximum performance."
          },
          {
            title: "What can I put into the Digester?",
            content: "The Digester is designed to process a wide range of food waste types like, fruit, vegetables, cooked and uncooked meat and poultry, fish, dairy, bakery items, etc."
          },
          {
            title: "What CAN'T I put into the Digester?",
            content: "The machine cannot process anything that is not food waste and cannot be easily broken down such as large bones, mussel and clam shells, pineapple tops, packaging, general waste or cutlery. Placing the wrong items into the machine could cause damage and could void the warranty."
          },
          {
            title: "Can I put hot soups or frozen foods in the machine?",
            content: "No. Please allow for the food waste to come to room temperature before adding. If very cold or very hot food waste is added it could change the core temperature of the digester and kill the microorganisms that breakdown the food waste."
          },
          {
            title: "How long can the hatch door be open for?",
            content: "It is best to have your sorted food waste (out of all plastic and packaging) ready to be fed into the machine before opening the door. Extended periods of time the door is open, more than five minutes, will cause the core temperature of the digester to come down. The microorganisms thrive in a consistently warm environment. Over exposure to cold temperatures could kill the microorganisms."
          },
          {
            title: "What can I do to keep the machine running at 100%",
            content: "Keeping the machine fed and clean is the most important. Daily inspections and removal of any in-organic materials that may have accidentally been added to the digester is suggested."
          },
          {
            title: " Does the machine grind or chop the food waste?",
            content: "No, the Digester does not grind or chop the food waste it gradually digests the food waste into a liquid."
          },
          {
            title: "What is the warranty on the digester?",
            content: "Each Digester comes with one year limited warranty."
          },
          {
            title: "How much water is consumed and discharged per day?",
            content: "When operating our largest machine in a 24 hour period, the fresh water consumption is no more than 300 gallons per day. The effluent discharged is 400 to 500 gallons per day."
          },
          {
            title: "Why are there plastic chips in the digester?",
            content: "The plastic chips are the BioMedia where the microorganisms live. The plastic media remains in the machine at all times."
          },
          {
            title: "How often and how much can I feed my Digester?",
            content: "The key to BioHiTech Digester’s success is balanced feeding. Like your stomach, If you feed it too much at once it takes longer to digest. A balanced diet is the best way to allow BioHiTech Digester to be most effective."
          }
        ],
        activeTab: '',
        renewableFaqs: [
          {
            label: "PERMITTING",
            faqs: [{
              title: "What permits are possibly needed (varies by state)?",
              content: "<ul><li><p>Solid Waste Permit</p></li><li><p>Air Quality Minor Source Permit to Construct</p></li><li><p>Encroachment Permit for public road access</p></li><li><p>Local Planning and Zoning Permits</p></li><li> <p>Building permits and local compliance requirements – Ongoing as required for construction.</p> </li></ul>"
            },
              {
                title: "What is the time frame for completion?",
                content: "Once all major permits have been issued, construction is expected to take 12-16 months."
              }
            ]
          },
          {
            label: "OPERATIONAL",
            faqs: [{
              title: "What are the advantages to Mechanical, Biological Treatment (MBT)?",
              content: "MBT, when applied to municipal solid waste (MSW) leads to a significant weight loss. The process will lead to the recovery of additional metal recyclables (while not impacting current or future recycling activities), substantial reduction in the need for landfilling and the creation of a final product that is EPA recognized as a renewable alternative fuel called SRF. Each of these accomplishments will result in a substantial reduction in Greenhouse Gasses. There is no hazardous waste or incineration or combustion involved in the MBT process."
            },
              {
                title: "What is the MBT Process and how is the Solid Refuse Fuel made?",
                content: "<ul><li><p><i>Reception</i><span>&nbsp;</span>– Municipal Solid Waste (MSW) placed by resident’s curbside as it is today, will be brought to the proposed facility by a local hauler. The MSW will be deposited into an indoor aerated reception pit. Air is continuously drawn into the building to avoid odor buildup inside the Facility. There is no combustion or incineration in this process.</p><p>MSW processed at the Facility is anticipated to include all of the waste currently allowable by local waste haulers including but not limited to, kitchen organic waste, mixed unsorted paper, plastics, etc. Excluded waste includes all wastes that are currently prohibited by the local waste hauler such as hazardous waste, used oil, source separated recyclables, white goods and construction debris.</p></li><li><p><i>Pre-screening</i><span>&nbsp;</span>– MSW will go through an initial screening process using a large rotary drum that will tear open the trash bags and combine the bagged waste with other non-bagged MSW. Large pieces of waste such as plastic, paper and cardboard are separated from the MSW and set aside for use during the refining stage. The remaining waste, including organic waste is referred to as “underscreen” material, is smaller in size and goes directly to a holding area. An air circulation system will be used to ensure rapid composting of the organic fraction of the waste. The air circulation system blows warm air through the under-screen waste in order to quickly start up the aerobic composting fermentation process.</p></li><li><p><i>Biological treatment (oxidation/composting)</i><span>&nbsp;</span>– The underscreen material is moved from the holding area and placed on a pre-fabricated concrete floor that contains slots through which processed air is moved. The processed air is comprised of a controlled combination of fresh air and re-circulated warm air, which ensures a consistent breakdown of the waste. This reduces the amount of water in the material leading to a dry paper-like product. There is<span>&nbsp;</span><strong>no combustion or incineration in this process.</strong></p></li><li><p><i>Refining</i><span>&nbsp;</span>– After the biological treatment stage, the now dried under-screen material will be re-introduced to the previously removed over-screen material in the refinement area of the facility. Using rotary screens, air separators and magnetic/infrared technology, the material is further separated to remove any metals and PVC plastics that may remain. Metals will be sent to the County Recycling Center on Grapevine Road. The PVC plastics will be sent to the local landfill. The product is then shredded into smaller pieces resulting in a product that can be used as an alternate fuel replacing traditional fuels, such as coal and petroleum coke.</p></li></ul>"
              },
              {
                title: "How will emissions/odors from the facility be controlled?",
                content: "<ul><li>The building will be under slight negative pressure, which will keep the odors from reaching the outside environment.</li><li>All of the air (about 70,000 m<sup>3</sup>) drawn from the building is cleaned by means of a very large biofilter that has been proven to be the most effective technology for odor control over the years. It is a process that involves harnessing natural microbes to remove odor from the air.</li><li>Dust control devices such as bag houses will collect any particulate matter from the air prior to discharge to the atmosphere from the building.</li><li>The doors used by trucks entering the building are “quick open/close” doors which will help to eliminate odor emissions as well. At the existing SRF manufacturing facilities, located in Europe, there is no noticeable odor at the facility boundaries.</li><li>Visible particulate emissions will be monitored as required by the WVDEP Air Permit-to-Construct and additionally throughout the workday to ensure that dust is properly controlled.</li></ul>"
              }
            ]
          },
          {
            label: "CONSTRUCTION",
            faqs: [{
              title: "Who will build the facility?",
              content: "<ul><li>A bonded Engineering, Procurement and Commissioning (EPC) Contractor</li><li>A bonded General Contractor</li><li>A design-build and construction management firm specializing in pre-engineered metal building design and construction</li><li>Local contractors will be selected as sub-contractors for various elements of the construction of the proposed facility</li><li>It is estimated that approximately 50-100 individuals could be involved in the construction project</li></ul>"
            },
              {
                title: "What is the estimated cost for construction of the proposed facility?",
                content: "The total investment for the facility, construction, and equipment will vary.",
              }, {
                title: "What type of construction is the proposed facility?",
                content: "Construction will be modular concrete placement and steel building technology. The first phase of construction will be the placement of the flooring, walls and roof. The second and more complicated phase is the placement of the mechanical equipment.",
              }
            ]
          },
          {
            label: "SRF (SOLID RECOVERED FUEL)",
            faqs: [{
              title: "Is this SRF manufacturing facility an incinerator?",
              content: "No. The proposed process does not combust any waste materials as a method of waste disposal. The proposed process uses mechanical (e.g., conveyors, sorters, and cranes) and naturally occurring biological processes (oxidation or composting) to produce an alternate fuel.",
            }, {
              title: "Where will the MSW come from?",
              content: "<ul><li>The MSW would come from surrounding counties needed to operate the facility</li><li>Household waste and C&amp;D waste can be accepted.</li><li>Select commercial waste may be accepted</li></ul>",
            },
              {
                title: "Will there be any new infrastructure required to handle the truck traffic?",
                content: "An access road may need to be permitted and built to access the facility.",
              },
              {
                title: "How many individuals will be employed?",
                content: "At capacity the facility will have between 15-20 employees. These employees consist of individuals working at the facility in various positions. Additional employees will be required for the transportation of SRF and recyclables to market, as well as any residual waste to landfills. In addition, there will be a number of services connected with maintenance and cleaning that may be outsourced to local companies.",
              },

              {
                title: "Who is going to buy and use the SRF?",
                content: "The manufactured SRF has been used in European communities by the cement industry, steel plants, power plants, and gasification plants.",
              },
              {
                title: "What are the environmental benefits of using SRF as an alternate fuel?",
                content: "<p>The SRF from the Entsorga process has been proven to have contaminants comparable to or less than those found in traditional US fossil fuels. Facilities that have used SRF as an alternative fuel have reduced their Greenhouse Gas Emissions and their overall carbon footprint. In addition to a cleaner burning fuel supply, less MSW will need to be disposed of in landfills. As a result, this will trigger a reduction in GHG emissions of an estimated 24,800 tons per year of carbon dioxide or carbon dioxide equivalent. Using the U.S. Environmental Protection Agency Greenhouse Gas Equivalencies Calculator<wbr><a href=\"https://www.epa.gov/cleanenergy/energy-resources/calculator.com\" target=\"_blank\" rel=\"noopener\">(&nbsp;www.epa.gov/cleanenergy/energy-resources/calculator.com&nbsp;)</a>below are some statistics that show relative comparisons of carbon dioxide emissions and carbon sequestration to everyday activities:</p><ul><li><p>Annual GHG emissions from 4,411 passenger vehicles (assuming 20.4 miles per gallon and 11,720 miles per year per vehicle).</p></li><li><p>CO2 emissions from 2,522,218 gallons of gasoline consumed.</p></li><li><p>Carbon sequestered by 576,876 tree seedlings grown for 10 years.</p></li><li><p>Carbon sequestered annually by 4,797 acres of pine forests.</p></li></ul>",
              },
              {
                title: "Is SRF manufacturing and use a proven technology?",
                content: "<p>There are currently over 300 MBT plants being utilized throughout Europe today. The highest concentration of SRF manufacturing facilities is in Germany, Italy, Spain, and the UK. There are numerous MBT plants currently under construction throughout Europe including the United Kingdom, Poland, Slovenia, Romania, and the Czech Republic.</p><p>The most recent constructed Entsorga plant was commissioned in 2014 by the Hills Group in Wiltshire England. It currently processes over 70,000 tons per year of MSW into SRF.</p>"
              }
            ]
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
