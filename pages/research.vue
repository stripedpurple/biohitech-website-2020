<template>

  <div>
    <rs-banner/>
    <news-feed tag="Case Study" title="Case Studies" subtitle="BioHiTech Research"/>

    <section class="section has-background-light">
      <div class="container">
        <div class="columns is-multiline is-centered">
          <div class="column is-full">
            <h2 class="title has-text-centered is-size-2">Education</h2>
          </div>

          <div class="column is-one-third-desktop is-half-tablet"
                v-for="(card, key) in education" :key="key">
            <news-card :title="card.title" :content="card.content" :imgsrc="card.imgsrc" :url="card.link"/>
          </div>
        </div>
      </div>
    </section>

    <meta-tags title="Research" description="Educational information, research, and case studies regarding sustainability and environmental conservation"/>
  </div>
</template>

<script>
  export default {
    name: "research",
    data () {
      return {
        education: [
          {
            title: "Food Waste Reduction",
            content: "In 2017, more food went to landfills and combustion facilities than any other type of material, according to the EPA…..",
            link: '/education/food-waste-reduction-system',
            imgsrc: '/img/food-waste-reduction-system-thumb.jpg'
          },{
            title: "Environmental Sustainability",
            content: "An environmentally sustainable business is one that provides service and makes a profit without compromising the future of the environment…",
            link: '/education/environmental-sustainability-in-business',
            imgsrc: '/img/environmental-sustainability-in-business-thumb.jpg'
          },{
            title: "Zero Waste Landfill Solutions",
            content: "Landfill diversion is becoming more critical to organizations worldwide as sustainability goals become a vital aspect of business and landfill space continues to reduce annually…",
            link: '/education/zero-waste-landfill-solutions',
            imgsrc: '/img/zero-waste-landfill-solutions-thumb.jpg'
          },{
            title: "Benefits of Environmental Sustainability",
            content: "Environmental sustainability is the capacity to enhance the quality of human life without destroying the earth’s ecosystems…",
            link: '/education/benefits-of-environmental-sustainability',
            imgsrc: '/img/benefits-of-environmental-sustainability-thumb.jpg'
          },{
            title: "Managing Food Waste & Fighting Climate Change",
            content: "A report by the Food and Agriculture Organization of the United Nations (FAO) states that one-third of the food produced globally reaches the landfill instead of the consumer’s table…",
            link: '/education/food-waste-and-fighting-climate-change',
            imgsrc: '/img/food-waste-and-fighting-climate-change-thumb.jpg'
          },{
            title: "Solid Recovered Fuel (SRF)",
            content: "One of the ways to utilize the ever-increasing volume of municipal solid waste is to turn it into an alternative source of fuel for generating heat and electricity…",
            link: '/education/what-is-solid-recovered-fuel',
            imgsrc: '/img/what-is-solid-recovered-fuel-thumb.jpg'
          },{
            title: "Sustainable Food Waste Management",
            content: "The EPA found that the United States generated nearly 41 million tons of food waste in 2017. Out of that food waste, we only diverted 6.3% from incinerators and landfills…",
            link: '/education/sustainable-food-waste-management-with-hebiot',
            imgsrc: '/img/sustainable-food-waste-management-with-hebiot-thumb.jpg'
          }
        ]

      }
    }
  }
</script>

<style scoped>

</style>








