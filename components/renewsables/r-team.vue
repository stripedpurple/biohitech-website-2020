<template>
  <section class="section has-background-light">
    <div class="container">
      <div class="columns">
        <div class="column">
          <p class="subtitle">Our Team</p>
          <h2 class="title">Meet the people behind the renewable tech</h2>
          <b-tabs v-model="activeTab">
            <b-tab-item :label="tab.label" v-for="(tab, key) in tabs" :key="key">
              <div class="content" v-html="tab.content"></div>
            </b-tab-item>
          </b-tabs>


          <div class="buttons">
            <nuxt-link class="button is-primary" to="/contact">CALL FOR MORE INFORMATION</nuxt-link>
            <a class="button is-primary" href="http://investors.biohitechglobal.com/">VISIT OUR INVESTOR PAGE</a></div>
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
            label: 'Emily F. Dyson',
            content: '<p><strong>Director of Science, Research, and Development</strong></p><p>Emily has more than 25 years in the environmental science and permitting field. Emily comes to BioHiTech Global from the environmental consulting world where she was the CEO of Dyson Environmental Management and Compliance. Ms. Dyson has worked throughout North America with clients and regulators on issues related to solid waste disposal, wastewater, air emissions, and overall industrial environmental program development.</p><p>Emily’s role as the Director of Science, Research and Development is to bring advanced techniques and understanding of the science of bio-technologies. Emily works with BioHiTech Global’s Operations personnel to identify new approaches and technologies for solid waste disposal and assist BioHiTech Global in bringing them to the market in the bio-technology/waste management arena. In addition, Emily works with BioHiTech’s sales force and clients to ensure that they have an understanding of the science they deploy, the impacts to the surrounding environment, and the regulatory compliance requirements that must be met.</p><p>Emily lives in Maryland with her husband and two college-age children.</p>'
          },{
            label: 'Michael Schmidt',
            content: '<p><strong>Executive Vice President of Strategic Growth and Development</strong></p><p>Michael Schmidt has joined the Senior Management team as Executive Vice President of Strategic Growth and Development and will have day to day oversight of M&amp;A as well as organic growth initiatives and ensuring achievement of Gold Medal’s vision of “Zero waste to landfill”. Michael served as WCA’s Vice President of Business Development for 2 years, where he helped to enhance the value to WCA’s shareholders by over $36m. Furthermore, while at WCA, Michael was instrumental in developing WCA’s diligence and integration programs helping to ensure M&amp;A activity was conducted smoothly and acquisitions were accretive day one.</p><p>Prior to joining WCA, Michael spent 13 years at Comerica Bank in Detroit, Michigan where, he built a career by expanding his business and strategic thinking skills through positions that included client relationship manager and senior credit officer, and was instrumental in the formation of Comerica’s Environmental Service Department. During his tenure in the environmental services space, Michael worked with numerous clients and applied an advisory-based approach to customer relationships, while underwriting and consulting on more than 100 acquisitions, including tuck-ins by strategic waste companies, as well as large platform acquisitions by private equity firms.</p><p>Michael holds a Bachelor of Business Administration and a Master of Business Administration from the University of Michigan-Dearborn, with a major in Finance. He is also a Certified Financial Risk Manager.</p>'
          },{
            label: 'Entsorga Italia',
            content: '<p>Entsorga Italia is a leading provider of integrated proprietary technology platforms in the fields of waste management, recycling and for the production of alternative fuels. For the past 20 years, we have successfully delivered over 80 bankable project solutions representing approximately two million tons of annual processing capacity.</p><p>Entsorga currently operates through its subsidiaries in Europe, North and South America and Africa.</p><p>For more information please visit<span>&nbsp;</span><a href="https://www.entsorga.it/ENG/group.php" class="learn" target="_blank" rel="noopener noreferrer">entsorga.it</a></p>'
          },
        ]
      }
    }
  }
</script>

<style scoped lang="sass">
</style>
