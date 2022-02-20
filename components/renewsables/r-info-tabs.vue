<template>
  <section class="section has-background-light">
    <div class="container">
      <div class="columns">
        <div class="column">
              <b-tabs v-model="activeTab">
                <b-tab-item :label="tab.label" v-for="(tab, key) in tabs" :key="key">
                  <div class="content" v-html="tab.content"></div>
                </b-tab-item>
              </b-tabs>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "d-stats",
    data() {
      return {
        activeTab: 0,
        tabs: [
          {
            label: 'BioHiTech HEBioT Technology',
            content: '<p>Our new state-of-the-art facility, located in Martinsburg, WV, is the first resource recovery facility in the United States that will utilize Entsorga Italia’s proprietary BioHiTtech HEBioT mechanical biological treatment (“MBT”) system.</p><p>By utilizing the BioHiTtech HEBioT MBT system, Entsorga WV will recover bio-mass, plastics and other carbon based materials from the mixed municipal solid waste (MSW) and convert them into a safe alternative fuel source. When collecting these sources of MSW, Entsorga WV will remove other valuable recyclable commodities such as metals from the BioHiTtech HEBioT receiving stream and put them into the local municipality recycling stream. This is in conjunction with the Berkeley County Recycling program that is already in place. Together this will increase recycling rates for the municipality.</p><p>A substantial amount of the MSW received to a clean burning alternative fuel (Solid Recovered Fuel or SRF) which will be used by large energy users as an alternative or supplement to fossil fuels.</p>'
          },{
            label: 'How is Solid Recovered Fuel (SRF) Used?',
            content: '<p>The use of SRF instead of fossil fuels helps to preserve natural resources and reduces emissions to the environment.&nbsp; Municipal solid waste and various types of commercial and industrial wastes that would otherwise be landfilled are put to use as a sustainable fuel.&nbsp; Using these wastes to produce a valuable commodity reduces the need for mining and transportation of fossil fuels throughout the U.S.&nbsp; The environmental and economic benefits of using SRF as a replacement for fossil fuels are:</p><ul><li>Reduced reliance on expensive fossil fuels</li><li>Reduced carbon footprint due to lower emission than that of fossil fuels</li><li>Increased sustainability performance</li><li>High calorific value – energy content comparable to that of coal</li><li>Derived from carbon neutral biomass</li><li>Manufactured from consistent and sustainable supplies of MSW</li></ul><p>The Martinsburg facility is capable of processing 110,000 tons of municipal solid waste annually while producing 45,000 tons of SRF.&nbsp; That SRF is currently being utilized as a partial replacement for coal by nearby cement manufacturers.&nbsp; The processing of municipal solid waste at the Martinsburg Facility results in up to an 80% reduction in landfill usage.</p><p>BioHiTech has undergone initial testing with a US-based engineering firm servicing the federal government, to use its SRF as a replacement for coal in thermal processing applications for steam boilers and power plants and is also collaborating with a renewable materials manufacturer based in Israel that is expected to begin testing the SRF as feedstock for its renewable thermoplastic.</p>'
          },{
            label: 'BioHiTech HEBioT Benefits',
            content: '<p>Providing a proven, cost-effective, clean alternative to landfills for the disposal of solid waste throughout the United States. The High Efficiency Biological Treatment (HEBioT™) process, developed and patented by our European partners Entsorga Fin SpA, utilizes a combination of automated sorting equipment, enhanced biological composting, and mechanical refinement to convert waste into an EPA recognized, clean alternative fuel while achieving as much as 80% landfill diversion.</p><p>The&nbsp;<span>BioHiTtech HEBioT</span> technology is ideal for municipalities, regional waste haulers, large generators of food waste and corporations with Zero Waste initiatives. BioHiTech is an equity partner in Entsorga West Virginia, which serves as the first resource recovery facility in the U.S., to utilize the HEBioT technology.</p>'
          },
        ]
      }
    }
  }
</script>

<style scoped lang="sass">
</style>
