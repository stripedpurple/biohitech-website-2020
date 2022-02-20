<template>
  <div>
    <section class="section container">
      <div class="columns is-multiline">

        <div class="column is-full">
          <h1 class="subtitle is-size-6">Customer Portal</h1>
          <h2 class="title">Digester Support</h2>
        </div>

        <div class="column is-half-tablet" v-for="(opt, key) in options" :key="key">
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
            icon: 'alert',
            title: 'System Down',
            text: 'The system is not available, my data is missing, or I keep getting errors.',
            link: '/customer-service/cloud-support/contact?desk=digester&type=dig-cloud-error'
          },
          {
            icon: 'lock',
            title: 'Access',
            text: 'I am unable to log into the system, I forgot my password, or I would like to request access to the system.',
            link: '/customer-service/cloud-support/contact?desk=digester&type=dig-cloud-error'
          },
          {
            icon: 'text-box',
            title: 'Online Help',
            text: 'Browse online help for BioHiTech Cloud.',
            link: 'https://biohitech.atlassian.net/wiki/spaces/HELP/pages/58261650/BioHitech+Cloud+User+s+Guide'
          },
          {
            icon: 'help-circle',
            title: 'Questions',
            text: 'I have a question about the BioHiTech Cloud.',
            link: '/customer-service/cloud-support/contact?desk=digester&type=dig-cloud-question'
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
