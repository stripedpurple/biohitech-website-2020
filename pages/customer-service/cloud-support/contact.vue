<template>
  <div>
    <section class="section container">
      <div class="columns is-multiline">

        <div class="column is-full">
          <h1 class="subtitle is-size-6">Customer Portal</h1>
          <h2 class="title">Cloud Support</h2>
        </div>

        <div class="column is-full">
          <form action="#" @submit.prevent="createTicket">
            <b-field label="Name">
              <b-input v-model="formData.name" type="text" placeholder="John Smith" required/>
            </b-field>

            <b-field label="Organization/Company">
              <b-input v-model="formData.organization" type="text" placeholder="ACME" required/>
            </b-field>

            <b-field label="Location">
              <b-input v-model="formData.location" type="text" placeholder="North Hampton" required/>
            </b-field>

            <b-field label="Email">
              <b-input v-model="formData.email" type="text" placeholder="jsmith@example.com" required/>
            </b-field>

            <b-field label="Phone Number">
              <b-input v-model="formData.phone" type="text"
                       placeholder="(555) 180-0000 (Optional, but we really prefer to have it)"/>
            </b-field>

            <b-field label="Description">
              <b-input v-model="formData.description" type="textarea"
                       placeholder="My machine is not reporting data."
                       required/>
            </b-field>

            <BackButton></BackButton>
            <b-button tag='input' native-type="submit" type="is-primary" value='Submit Request'/>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

  export default {
    head() {
      return {
        title: 'Get BioHiTech Cloud Support',
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          {
            hid: 'robots',
            name: 'robots',
            content: 'noindex'
          }
        ]
      }
    },
    name: 'HomePage',
    data() {
      return {
        baseUrl: 'bihitech.com',
        formData: {
          name: null,
          organization: null,
          location: null,
          email: null,
          phone:null,
          summary: 'Customer Submission',
          description: null,
          desk: null,
          type: null

        }
      }
    },
    mounted() {
      this.formData.desk = this.$route.query.desk;
      this.formData.type = this.$route.query.type;
    },
    methods: {
      createTicket(){
        this.$axios.post('/customer/support', this.formData).then(res => {
          console.log(res);
          this.$buefy.snackbar.open({
            message: 'We received your request and sent you a confirmation email!',
            type: 'is-success',
            indefinite: true,
            position: 'is-top'
          })
        }).catch(err => {
          console.log(err);
          this.$buefy.toast.open({
            message: 'An error occurred! Please try again.',
            type: 'is-danger',
            duration: 3500
          })
        })
      }
    }

  }
</script>
