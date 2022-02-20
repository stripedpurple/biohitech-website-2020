<template>
  <div>
    <section class="hero has-background-info is-medium">
      <div class="hero-body">
        <h1 class="subtitle">Customer Portal</h1>
        <p class="title is-size-1-desktop">What can we help you with?</p>
      </div>
    </section>

    <section class="section container">
      <div class="columns is-multiline is-desktop">

        <div class="column is-full">
          <h1 class="subtitle is-size-6">Customer Portal</h1>
          <h2 class="title">What can we help you with?</h2>
        </div>

        <div class="column is-half-desktop" v-for="(opt, key) in options" :key="key">
          <a :href="opt.link" v-if="isExternalLink(opt.link)" rel="noopener noreferrer">
            <BoxButton :option="opt"></BoxButton>
          </a>

          <n-link :to="opt.link" v-else>
            <BoxButton :option="opt"></BoxButton>
          </n-link>
        </div>

      </div>
      <br>
      <hr>
      <br>
      <div class="columns is-multiline is-desktop">
        <div class="column is-full">
          <h1 class="subtitle is-size-6">Find Answers Fast</h1>
          <h2 class="title">Resources &amp; Quick Links</h2>
        </div>

        <div class="column is-half-desktop" v-for="(opt, key) in resources" :key="key">
         <a :href="opt.link" rel="noopener noreferrer">
           <BoxButton :option="opt"></BoxButton>
         </a>
        </div>


      </div>
    </section>
    <meta-tags title="Customer Service & Support" description="Get help with your BioHiTech products"/>
  </div>
</template>

<script>
  export default {
    name: 'HomePage',
    data() {
      return {
        baseUrl: 'bihitech.com',
        options: [
          {
            icon: 'filter',
            title: 'Digester Help',
            text: 'I need help with my Digester.',
            link: '/customer-service/digester-support'
          }, {
            icon: 'cloud',
            title: 'BioHiTech cloud® Help',
            text: 'I need help with BioHiTech cloud®.',
            link: '/customer-service/cloud-support'
          }, {
            icon: 'cart',
            title: 'Supplies and Service Contracts',
            text: 'Schedule your Digester\'s yearly service or order supplies.',
            link: '/customer-service/supplies'
          }, {
            icon: 'currency-usd',
            title: 'Sales Inquiries',
            text: 'I am interested in purchasing a Digester, and I have a question.',
            link: '/contact'
          }
        ],

        resources: [
          {
            icon: 'video',
            title: 'Training Videos',
            text: 'Learn the ins and outs of your Digester. Or get trained on BioHiTech Cloud&reg; and analytics/reporting.',
            link: '/videos'
          }, {
            icon: 'help-circle',
            title: 'FAQs',
            text: 'Sometimes we stumble, or you have a simple issue, so we have collected some common question and answers.',
            link: '/faq'
          }, {
            icon: 'phone',
            title: 'Give us a ring',
            text: 'Sometimes a quick call can solve your problems, so drop us a line. Our support teams can reached by phone at 888.876.9300',
            link: 'tel:888.876.9300'
          }, {
            icon: 'email',
            title: 'Email Us',
            text: 'We know calls can be awkward or sometimes you just don have service, so you can email us at support@biohitech.com',
            link: 'mailto:support@biohitech.com'
          }
        ]
      }
    },
    methods: {
      isExternalLink(val) {
        if (!val) return false;

        return val.match(/^\w*:/);
      }
    }
  }
</script>
