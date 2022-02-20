<template>
  <div>
    <section class="hero is-info is-medium">
      <div class="hero-body">
        <p class="subtitle">Contact Us</p>
        <h1 class="title is-size-1-tablet">Get in touch</h1>
      </div>
    </section>
    <section class="section" id="contactForm">
      <div class="container">
        <div class="columns">
          <div class="column">
            <b-message title="Thanks!" type="is-success" aria-close-label="Close message" v-model="complete">
              Thanks for contacting us some will be in touch soon.
            </b-message>

            <form
              v-if="!complete"
              ref="form"
              action="#"
              @submit.prevent="onSubmit">
              <b-field label="How can we help?">
                <b-select required v-model="helpSelection" expanded>
                  <option
                    v-for="option in selection"
                    :value="option.val"
                    :key="option.val">
                    {{ option.text }}
                  </option>
                </b-select>
              </b-field>

              <b-field label="Name">
                <b-input placeholder="John Smith" type="text" v-model="formData.name" required/>
              </b-field>
              <b-field label="Company">
                <b-input placeholder="Kerblam!" type="text" v-model="formData.company" required/>
              </b-field>
              <b-field label="Email">
                <b-input placeholder="jsmith@example.com" type="email" v-model="formData.email" required/>
              </b-field>
              <b-field label="Phone">
                <b-input placeholder="(555) 180-0000" type="tel" v-model="formData.phone"/>
              </b-field>

              <b-field label="Message">
                <b-input placeholder="I would like some more information about..." type="textarea" v-model="formData.message" required/>
              </b-field>


              <b-field>
                <b-button type="is-primary"
                          native-type="submit"
                          tag="input"
                          value="Send"
                />
              </b-field>

              <recaptcha style="display: none"/>
            </form>

            <br>
            <hr>
            <br>

            <div class="box has-background-primary">
              <div class="columns">
                <div class="column is-one-third has-text-centered">
                  <b-icon size="is-large" icon="phone"/>
                  <br>
                  <br>
                  <p class="default title is-size-4-tablet">PHONE</p>
                  <p class="default">You can reach us from 8am to 5pm, Monday through Friday</p>

                  <a href="tel:888-876-9300" target="_blank" rel="noopener nofollow">888-876-9300</a>
                </div>
                <div class="column is-one-third has-text-centered">
                  <b-icon size="is-large" icon="email"/>
                  <br>
                  <br>
                  <p class="default title is-size-4-tablet">SUPPORT</p>
                  <p class="default">For technical issues, please use our support link.</p>

                  <nuxt-link to="/customer-service">Support</nuxt-link>
                </div>
                <div class="column is-one-third has-text-centered">
                  <b-icon size="is-large" icon="map-marker"/>
                  <br>
                  <br>
                  <p class="default title is-size-4-tablet">HEADQUARTERS</p>
                  <address>
                    <p class="default">80 Red Schoolhouse Road <br>
                      Suite 101 <br>
                      Chestnut Ridge, NY 10977</p>
                  </address>
                  <a href="https://g.page/biohitech-america?share" target="_blank" rel="noopener nofollow">view map</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.5308800439757!2d-74.05673778409698!3d41.07924597929371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2e64a9774d75b%3A0x2657a1a9e4b08f82!2sBioHiTech%20America!5e0!3m2!1sen!2sus!4v1597086591169!5m2!1sen!2sus"
        frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false"
        tabindex="0"></iframe>
    </section>

    <b-loading :is-full-page="true" :active.sync="isLoading"></b-loading>

    <meta-tags title="Contact Us" description="Get help with your sustainability needs. Get a quote, see a demo, talk to support."/>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        complete: false,
        isLoading: false,
        helpSelection: 'hello@biohitech.com',
        selection: [
          {val: 'digester', text: 'Digester Support'},
          {val: 'cloud', text: 'Cloud Support'},
          {val: 'support@biohitech.com', text: 'Other Support'},
          {val: 'hello@biohitech.com', text: 'General / Sales Inquiry'},
        ],
        formData: {
          name: '',
          company: '',
          email: '',
          phone: '',
          message: '',
          contactTo: 'hello@biohitech.com',
        }
      }
    },
    async mounted() {
      await this.$recaptcha.init()
    },
    methods: {
      async onSubmit() {
        if (this.isLoading === true) return;

        if (this.formData.message.split(' ').length <= 1) return this.$buefy.toast.open({
          message: 'Please provide more detail in your message!',
          type: 'is-danger',
          duration: 3500,
          queue: false
        })

        this.isLoading = true;

        try {
          const token = await this.$recaptcha.execute('submit');

          if (!!token) {
            this.$axios.post('/contact', this.formData).then(res => {
              this.complete = true;

            }).catch(err => {
              this.$buefy.toast.open({
                message: 'An error occurred while sending your info! Please try again later.',
                type: 'is-danger'
              })
            })
          }
        } catch (error) {
          this.$buefy.toast.open({
            message: 'Recaptcha failed!',
            type: 'is-danger'
          })
        }

        fbq('track', 'Lead');

        this.isLoading = false
      },
    },
    watch: {
      helpSelection: function(v) {
        this.formData.contactTo = v;

        if (v === 'digester') this.$router.push('/customer-service/digester-support');
        if (v === 'cloud') this.$router.push('/customer-service/cloud-support');
      }
    }
  }
</script>

<style scoped lang="sass">
  #map
    iframe
      height: 650px
      width: 100%
      margin-bottom: -0.5rem
      transition: all ease-in-out 0.3s
      @media screen and (min-width: 769px)
        &
          filter: brightness(0.5)

          &:focus,
          &:active,
          &:hover
            filter: brightness(1)

  .box
    > .columns
      margin: 0 !important

    .column
      border-bottom: 1px solid rgba(255, 255, 255, 0.5)

      &:last-child
        border-bottom: none

  @media screen and (min-width: 769px)
    .box
      padding: 2rem 0

      .column
        padding: 2rem 2.5rem
        border-right: 1px solid rgba(255, 255, 255, 0.5)
        border-bottom: 0

        &:last-child
          border-right: none
</style>
