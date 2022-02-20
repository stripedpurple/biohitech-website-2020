<template>
  <section class="section has-background-light">
    <div class="container">
      <div class="columns is-multiline is-desktop">
        <div class="column  is-one-third-desktop">
          <figure class="image is-16by9">
            <iframe class="has-ratio" title="Fighting Coronavirus with Altapure" frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    src="https://www.youtube.com/embed/2xBVuKGCWsE?feature=oembed"
                    width="1920" height="1080"></iframe>
          </figure>
        </div>

        <div class="column is-offset-1-desktop">
          <p class="title">Disinfection Agent</p>
          <p>The preferred sub-micron aerosolized agent is Altacare ® cold sterilant, a powerful broad spectrum
            disinfectant consisting of only 1.06% of active ingredients when mixed (0.88% hydrogen peroxide, and 0.18%
            acetic acid), and 98.58% ultra-pure water (Total Inert Ingredients: 98.94% – see product label). Altacare ®
            is manufactured from only pharmaceutical quality ingredients. Altapure’s process is residue free.</p>
        </div>

        <div class="column is-full">
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
            label: "Efficacy",
            content: `<p>When used according to directions, the results will be 100% elimination of spores, vegetative bacteria, and viruses, on surfaces within the enclosed space.</p><p>Experiments demonstrating the efficacy of Altapure’s aerosol against the most resistant biologic organisms were confirmed by researchers Dr. Curtis Donskey, MD (Case Western Reserve University, School Of Medicine), Dr. Dennis Maki, MD (University of Wisconsin, School of Medicine), Dr. William Rutala, Ph.D. (University of NC, Epidemiology), Raven Biological Laboratories of Omaha, NE, (now Mesa Laboratories, Inc. – an independent, internationally recognized reference laboratory), and numerous hospitals in the United States. Virus efficacy data was also collected and reported by Biological Consulting Services, Inc.</p><p>For more information about Altapure’s efficacy, please visit our “Test Results &amp; Efficacy” section by clicking here.</p>`
          }, {
            label: "Market Applications",
            content: `<p>The AP-4 ™ may be utilized in many different applications including, but not limited to, the high level disinfection of surfaces and equipment in, the pharmaceutical industry, laboratories, research centers, medical device industry, food processing industry, food storage areas, civil defense, military and government, prisons, law enforcement, hospitals, outpatient clinics, and veterinary clinics. The AP-4 ™ can also be used to assist with fungus and mold removal and treatment, and surface disinfection, especially after floods, hurricanes, or other water damage.</p>`
          }, {
            label: "Technology Genesis",
            content: `<p>Altapure has worked jointly with Harris Corporation (NYSE: HRS), formerly ITT Exelis (NYSE: XLS), a top-tier global aerospace, defense, and information solutions company, to develop the patented ultrasonic subsystem of the AP-4 ™. This new technology represents cutting edge “next generation” technology for aerosol generation and delivery. This piezoelectric ceramic-based ultrasonic technology has a naval &amp; defense lineage that provides high power, durability, dependable quality, and cutting edge performance.</p><p>For more information about Altapure and its process, please visit our Technology section.</p>`
          }
        ]
      }
    }
  }
</script>

<style scoped lang="sass">
</style>


