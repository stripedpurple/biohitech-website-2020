<template>
  <section class="section has-background-primary is-primary-invert">
    <div class="container">
      <div class="columns is-multiline">
        <div class="column is-full">
          <p class="default title">Get in touch!</p>
        </div>

        <div class="column is-one-third">
          <a href="tel:888-876-9300">888-876-9300</a><br>
          <nuxt-link to="/contact">Contact Online</nuxt-link>
          <br>
          <nuxt-link to="/">Careers</nuxt-link>
        </div>

        <div class="column is-one-third">
          <p class="default"><strong>Headquarters</strong><br>
          80 Red Schoolhouse Rd, Suite 101 <br>
          Chestnut Ridge, NY 10977</p>
        </div>

        <div class="column is-one-third has-text-right-tablet">
          <ul class="social-icon">
            <li>
              <a class="has-text-light" href="https://www.facebook.com/BioHiTechglobal/" title="Follow on Facebook" target="_blank"
                 rel="noopener">
                <b-icon icon="facebook"/>
              </a>
            </li>
            <li>
              <a class="has-text-light" href="https://twitter.com/BioHiTech" title="Follow on Twitter" target="_blank" rel="noopener">
                <b-icon icon="twitter"/>
              </a>
            </li>
            <li>
              <a class="has-text-light" href="https://www.youtube.com/channel/UCYt3nRcppVHWTBreIsH9KlA/" title="Follow on Youtube"
                 target="_blank" rel="noopener">
                <b-icon icon="youtube"/>
              </a></li>
            <li>
              <a class="has-text-light" href="https://www.instagram.com/BioHiTech/" title="Follow on Instagram" target="_blank" rel="noopener">
                <b-icon icon="instagram"/>
              </a>
            </li>
            <li>
              <a class="has-text-light" href="https://www.linkedin.com/company/BioHiTech-america/" title="Follow on LinkedIn" target="_blank"
                 rel="noopener">
                <b-icon icon="linkedin"/>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr>

      <div class="columns is-multiline">
        <div class="column is-one-quarter-desktop is-half-tablet">
          <p class="default">MEDIA</p>
          <ul class="list-unstyled">
            <li><nuxt-link to="/news">In The News</nuxt-link></li>
            <li><a href="https://investors.BioHiTechglobal.com/news-releases" target="_blank" rel="noopener noreferrer">Press
              Releases</a></li>
            <li><nuxt-link to="/videos">Videos</nuxt-link></li>
          </ul>
        </div>

        <div class="column is-one-quarter-desktop is-half-tablet">
          <p class="default">LEGAL</p>
          <ul class="list-unstyled">
            <li><nuxt-link to="/legal/termsandconditions/">Terms &amp; Conditions</nuxt-link></li>
            <li><nuxt-link to="/legal/aup">AUP</nuxt-link></li>
            <li><nuxt-link to="/legal/privacy/">Privacy Statement</nuxt-link></li>
            <li><nuxt-link to="/legal/apiterms/">API Terms &amp; Conditions</nuxt-link></li>
          </ul>
        </div>

        <div class="column is-one-quarter-desktop is-half-tablet">
          <p class="default">CUSTOMER LINKS</p>
          <ul>
          <li><nuxt-link to="/customer-service">Support &amp; Supplies</nuxt-link></li>
          <li><a href="https://biohitechcloud.com/customer/login?to=%2Fcustomer%2Fdashboards" target="_blank"
                 rel="noopener">Customer Cloud</a></li>
          <li><a href="https://investors.biohitechglobal.com/overview" target="_blank" rel="noopener">Investors</a></li>
          </ul>
        </div>

        <div class="column is-hidden-tablet-only is-hidden-mobile-only"></div>
        <div class="column is-narrow-desktop has-text-centered-desktop">
          <p class="default">DOWNLOAD THE APP</p>
          <a href="https://apps.apple.com/us/app/BioHiTech-cirrus/id1045055813" target="_blank" rel="noopener">
            <img loading="lazy" alt="" src="/img/dowload-petdesk-app-on-the-app-store-e1522090081753-200px.png"/>
          </a>

          <br>

          <a href="https://play.google.com/store/apps/details?id=com.BioHiTech.mobiledashboard" target="_blank"
             rel="noopener">
            <img loading="lazy" alt="" src="/img/google-play-badge-e1522090059399-200px.png"/>
          </a>
        </div>
      </div>

    <footer>
        <p class="default is-size-6-tablet">BioHiTech Global © 2020 All Rights Reserved Company &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;Made with <b-icon icon="heart" size="is-small" class="has-text-danger"/> <a href="https://stripedpurple.io" target="_blank" rel="noopener">Striped Purple</a></p>
    </footer>
    </div>
  </section>
</template>

<script>
  export default {
    name: "bht-footer",
  }
</script>

<style scoped lang="sass">
  .section
    padding-bottom: 1rem

    li
      margin: 0.5rem 0
      a
        padding: 0.5rem 0

  ul.social-icon li
    display: inline-block
    margin: 0.25rem

  hr
    border: none
    border-bottom: 1px solid rgba(255,255,255,0.25)
    background: none
    height: 0

</style>
