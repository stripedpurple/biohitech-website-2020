<template>
  <div>
    <section class="section container">
      <div class="columns is-multiline">

        <div class="column is-full">
          <h1 class="subtitle is-size-6">Customer Portal</h1>
          <h2 class="title">Digester Support</h2>
        </div>

        <div class="column is-one-third-desktop is-half-tablet" v-for="(opt, key) in options" :key="key">
          <a :href="opt.link" v-if="isExternalLink(opt.link)" rel="noopener noreferrer">
            <BoxButton :option="opt"></BoxButton>
          </a>

          <n-link :to="opt.link" v-else>
            <BoxButton :option="opt"></BoxButton>
          </n-link>
        </div>

        <div class="column is-full">
          <BackButton></BackButton>
        </div>
      </div>
    </section>

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
            icon: 'flash-alert',
            title: 'Equipment Malfunction',
            text: 'The Digester has stopped working or is damaged.',
            link: '/customer-service/digester-support/contact?desk=digester&type=dig-malfunction'
          },{
            icon: 'calendar',
            title: 'Schedule Maintenance',
            text: 'I would like to schedule my regular digester maintenance.',
            link: '/customer-service/digester-support/contact?desk=digester&type=dig-question'
          },{
            icon: 'help-circle',
            title: 'Questions',
            text: 'I have questions about my Eco-Safe Digester.',
            link: '/customer-service/digester-support/contact?desk=digester&type=dig-question'
          },
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


