<template>
  <b-navbar type="is-dark" class="is-spaced is-fixed-top" transparent>
    <template slot="brand">
      <b-navbar-item tag="nuxt-link" to="/">
        <img loading="lazy" src="~assets/logo.png"
             alt="biohitech support"
        >
      </b-navbar-item>
    </template>

    <template slot="end">
      <b-navbar-item tag="nuxt-link" to="/">
        Home
      </b-navbar-item>

      <b-navbar-dropdown hoverable label="Products &amp; Services">
        <b-navbar-item tag="nuxt-link" to="/digesters">
          Digesters
        </b-navbar-item>

        <b-navbar-item tag="nuxt-link" to="/digesters/cloud">
          Analytics
        </b-navbar-item>

        <b-navbar-item tag="nuxt-link" to="/renewables">
          Renewables
        </b-navbar-item>

        <b-dropdown :triggers="['hover', 'click']" aria-role="list" class="is-hidden-touch">
          <a class="navbar-item" slot="trigger">Disinfection Solutions
            <b-icon icon="chevron-right"></b-icon>
          </a>

          <b-dropdown-item has-link aria-role="menuitem">
            <b-navbar-item tag="nuxt-link" to="/altapure">Altapure</b-navbar-item>
          </b-dropdown-item>
        </b-dropdown>


        <a class="navbar-item is-disabled is-hidden-desktop is-italic has-text-weight-bold">Disinfection Solutions
          <b-icon icon="chevron-down"></b-icon>
        </a>

        <b-navbar-item class="navbar-item is-indented has-background-light is-hidden-desktop" tag="nuxt-link" to="/altapure">Altapure</b-navbar-item>


        <b-dropdown :triggers="['hover', 'click']" aria-role="list" class="is-hidden-touch">
          <a class="navbar-item" slot="trigger">Industries
            <b-icon icon="chevron-right"></b-icon>
          </a>

          <b-dropdown-item has-link aria-role="menuitem">
            <b-navbar-item tag="nuxt-link" to="/industries/healthcare">
              Healthcare
            </b-navbar-item>
          </b-dropdown-item>

          <b-dropdown-item has-link aria-role="menuitem">
            <b-navbar-item tag="nuxt-link" to="/industries/restaurants">
              Restaurants
            </b-navbar-item>
          </b-dropdown-item>

          <b-dropdown-item has-link aria-role="menuitem">
            <b-navbar-item tag="nuxt-link" to="/industries/municipal-waste">
              Municipalities
            </b-navbar-item>
          </b-dropdown-item>

          <b-dropdown-item has-link aria-role="menuitem">
            <b-navbar-item tag="nuxt-link" to="/industries/cruise-liner">
              Cruise Lines
            </b-navbar-item>
          </b-dropdown-item>

          <b-dropdown-item has-link aria-role="menuitem">
            <b-navbar-item tag="nuxt-link" to="/industries/schools">
              Schools
            </b-navbar-item>
          </b-dropdown-item>

          <b-dropdown-item has-link aria-role="menuitem">
            <b-navbar-item tag="nuxt-link" to="/industries/retirement-communities">
              Retirement Communities
            </b-navbar-item>
          </b-dropdown-item>

          <b-dropdown-item has-link aria-role="menuitem">
            <b-navbar-item tag="nuxt-link" to="/industries/corporate">
              Corporate
            </b-navbar-item>
          </b-dropdown-item>

        </b-dropdown>


        <a class="navbar-item is-disabled is-hidden-desktop is-italic has-text-weight-bold">Industries
          <b-icon icon="chevron-down"></b-icon>
        </a>

        <b-navbar-item class="navbar-item is-indented has-background-light is-hidden-desktop" tag="nuxt-link" to="/industries/healthcare">
          Healthcare</b-navbar-item>
        <b-navbar-item class="navbar-item is-indented has-background-light is-hidden-desktop" tag="nuxt-link" to="/industries/restaurants">
          Restaurants</b-navbar-item>
        <b-navbar-item class="navbar-item is-indented has-background-light is-hidden-desktop" tag="nuxt-link" to="/industries/municipal-waste">
          Municipalities</b-navbar-item>
        <b-navbar-item class="navbar-item is-indented has-background-light is-hidden-desktop" tag="nuxt-link" to="/industries/cruise-liner">
          Cruise Lines</b-navbar-item>


      </b-navbar-dropdown>

      <b-navbar-dropdown hoverable label="Company">
        <b-navbar-item tag="nuxt-link" to="/about">
          About
        </b-navbar-item>

        <b-navbar-item tag="nuxt-link" to="/careers">
          Careers
        </b-navbar-item>

        <b-dropdown :triggers="['hover', 'click']" aria-role="list" class="is-hidden-touch">
          <a class="navbar-item" slot="trigger">Media
            <b-icon icon="chevron-right"></b-icon>
          </a>

          <b-dropdown-item has-link aria-role="menuitem">
            <b-navbar-item tag="nuxt-link" to="/research">
              Research
            </b-navbar-item>
          </b-dropdown-item>

          <b-dropdown-item has-link aria-role="menuitem">

            <b-navbar-item tag="nuxt-link" to="/news">
              News
            </b-navbar-item>
          </b-dropdown-item>

          <b-dropdown-item has-link aria-role="menuitem">
            <b-navbar-item href="https://investors.biohitechglobal.com/news-releases"
                           target="_blank" rel="noopener nofollow">
              Press Releases
            </b-navbar-item>
          </b-dropdown-item>
        </b-dropdown>


        <a class="navbar-item is-disabled is-hidden-desktop is-italic has-text-weight-bold">Media
          <b-icon icon="chevron-down"></b-icon>
        </a>
          <b-navbar-item class="navbar-item is-indented has-background-light is-hidden-desktop" tag="nuxt-link" to="/research">
            Research
          </b-navbar-item>


          <b-navbar-item class="navbar-item is-indented has-background-light is-hidden-desktop" tag="nuxt-link" to="/news">
            News
          </b-navbar-item>

          <b-navbar-item class="navbar-item is-indented has-background-light is-hidden-desktop"
                         href="https://investors.biohitechglobal.com/news-releases"
                         target="_blank" rel="noopener nofollow">
            Press Releases
          </b-navbar-item>


      </b-navbar-dropdown>

      <b-navbar-dropdown hoverable label="Support">
        <b-navbar-item tag="nuxt-link" to="/faq">
          FAQs
        </b-navbar-item>

        <b-navbar-item tag="nuxt-link" to="/customer-service">
          Customer Service
        </b-navbar-item>

        <b-navbar-item tag="nuxt-link" to="/videos">
          Training Videos
        </b-navbar-item>
      </b-navbar-dropdown>

      <b-navbar-item href="https://investors.biohitechglobal.com/overview" target="_blank" rel="noopener nofollow"
                     @click="lead">
        Investors
      </b-navbar-item>

      <b-navbar-item tag="nuxt-link" to="/contact">
        Contact
      </b-navbar-item>

      <b-navbar-item tag="div">
        <div class="buttons">
          <a class="button is-light is-outlined has-background-primary" href="https://biohitechcloud.com"
             target="_blank"
             rel="noopener nofollow">
            Log in
          </a>
        </div>
      </b-navbar-item>
      <b-navbar-dropdown hoverable label="Admin"
                         v-if="!!$role.hasAny('bht-it,bht-employee,website-editor,website-admin')">
        <b-navbar-item href="#" class="is-disabled">
          <span class="has-text-weight-bold is-italic">Hello {{name}}</span>
        </b-navbar-item>

        <b-navbar-item tag="nuxt-link" to="/admin">
          Admin Tools
        </b-navbar-item>

        <b-navbar-item href="#" @click.prevent="$auth.logout">
          Logout
        </b-navbar-item>

      </b-navbar-dropdown>
    </template>
  </b-navbar>
</template>


<script>
  export default {
    name: 'Navigation',
    data() {
      return {
        baseUrl: 'biohitech.com',
        name: ''
      }
    },
    methods: {
      lead() {
        fbq('track', 'ViewContent');
      }
    },
    mounted() {
      this.name = !!this.$auth.user ? JSON.parse(this.$auth.user).firstName : ''
    }
  }
</script>

<style scoped lang="sass">
  .is-indented
    padding-left: 2.5rem

  a.is-disabled
    pointer-events: none
    cursor: default

    &:hover,
    &:focus
      background: none

  .buttons .button
    padding: 1rem

    &.has-background-primary:hover
      color: whitesmoke
      text-decoration: underline

  .dropdown + .dropdown
    margin: 0

  .dropdown
    @media screen and (max-width: 1024px)
      display: block

  .dropdown-trigger > .navbar-item
    font-size: 0.875rem
</style>
