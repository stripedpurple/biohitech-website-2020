<template>
  <div>
    <section class="section container">
      <form action="#" @submit.prevent="createTicket">
        <div class="columns is-multiline">
          <div class="column is-full">
            <h1 class="subtitle is-size-6">Service Contract</h1>
            <h2 class="title">Order Supplies or Service</h2>
          </div>

          <div class="column is-full">
            <b-field label="Name">
              <b-input v-model="formData.name" type="text" placeholder="Luke Skywalker" required/>
            </b-field>

            <b-field label="Organization / Company Name">
              <b-input v-model="formData.organization" type="text" placeholder="Rebel Alliance" required/>
            </b-field>

            <b-field label="Location">
              <b-input v-model="formData.location" type="text" placeholder="Tatooine" required/>
            </b-field>

            <b-field label="Email">
              <b-input v-model="formData.email" type="text" placeholder="last@je.di" required/>
            </b-field>


            <b-field label="Phone">
              <b-input v-model="formData.phone" type="text" placeholder="(555) 180-0000"/>
            </b-field>
          </div>

          <!--    Maintenance Check Boxes    -->
          <div class="column is-full">
            <p class="label">Maintenance</p>
          </div>
          <div class="column is-half-desktop" v-for="(item, key) in maintenanceItems" :key="item.title">
            <div class="box has-background-white-bis">
              <b-field>
                <b-checkbox :native-value="item" v-model="formData.checkedItems">
                  <p class="has-text-weight-bold" v-html="item.title"></p>
                  <small v-html="item.description"></small>
                </b-checkbox>
              </b-field>
            </div>
          </div>

          <div class="column is-full">
            <hr>
          </div>

          <!--    Annual Supplies Check Boxes    -->
          <div class="column is-full">
            <p class="label">Annual Supplies</p>
          </div>

          <div class="column is-half-tablet" v-for="(item, key) in annualSuppliesItems" :key="item.title">
            <div class="box has-background-white-bis">
              <b-field>
                <b-checkbox :native-value="item" v-model="formData.checkedItems">
                  <p class="has-text-weight-bold" v-html="item.title"></p>
                  <small v-html="item.description"></small>
                </b-checkbox>
              </b-field>
            </div>
          </div>

          <div class="column is-full">
            <hr>
          </div>

          <!--    A La Carte Check Boxes    -->
          <div class="column is-full"><p class="label">À La Carte</p></div>
          <div class="column is-half-tablet"
               v-for="(item, key) in aLaCarteItems" :key="item.title">
            <div class="box has-background-white-bis">
              <b-field>
                <b-checkbox :native-value="item" v-model="formData.checkedItems">
                  <p class="has-text-weight-bold" v-html="item.title"></p>
                  <small v-html="item.description"></small>
                </b-checkbox>
              </b-field>
            </div>
          </div>

          <div class="column is-full">
            <hr>
          </div>

          <div class="column is-full">
            <b-field label="Additional Comments">
              <b-input v-model="formData.otherComments" type="textarea"/>
            </b-field>
          </div>

          <div class="column">
            <BackButton></BackButton>
            <b-button tag='input' native-type="submit" type="is-primary" value="place order"/>
          </div>
        </div>
      </form>
    </section>
    <meta-tags title="Order Supplies" description="Order supplies for your BioHiTech Digester"/>
  </div>
</template>

<script>
  export default {
    name: 'HomePage',
    data() {
      return {
        formData: {
          name: null,
          organization: null,
          location: null,
          email: null,
          phone: null,
          summary: 'Customer Supplies Order',
          description: null,
          desk: 'digester',
          type: 'dig-supplies',
          otherComments: null,
          checkedItems: [],
        },
        maintenanceItems: [
          {
            title: `Annual Maintenance Contract with BioHiTech cloud&reg;`,
            description: `A year's worth of supplies for your Eco-Safe Digester®, including: bio-media,
                        microorganisms and deodorizer. The maintenance contract includes labor for on-site maintenance,
                        cleanings, phone support and software updates as available. This package includes a subscription to the
                        BioHiTech cloud® services.`
          },
          {
            title: `Annual Maintenance Contract without BioHiTech cloud&reg;`,
            description: `A year's worth of supplies for your Eco-Safe Digester®, including: bio-media,
                        microorganisms and deodorizer. The maintenance contract includes labor for on-site maintenance,
                        cleanings, phone support and software updates as available.`
          },
        ],
        annualSuppliesItems: [
          {
            title: `BioHiTech Seed&reg;`,
            description: `Qty. 1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5lb box of chip<br/>
                        Qty. 12&nbsp;&nbsp;&nbsp;&nbsp;bags of MO (1 per Month)`
          },
          {
            title: `BioHiTech Sprout&reg;`,
            description: `Qty. 1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8lb box of chip<br/>
                        Qty. 12&nbsp;&nbsp;&nbsp;&nbsp;bags of MO (1 per Month)`
          },
          {
            title: `BioHiTech Sapling&reg;`,
            description: `Qty. 1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10lb box of chip<br/>
                      Qty. 12&nbsp;&nbsp;&nbsp;&nbsp;bags of MO (1 per Month)`
          },
          {
            title: `BioHiTech Mangrove&reg;`,
            description: `Qty. 1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;25lb box<br/>
                      Qty. 12&nbsp;&nbsp;&nbsp;&nbsp;Bags of MO (1 per Month)`
          },
          {
            title: `Eco-Safe 4`,
            description: `Qty. 1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;14lb box of chip <br/>
                      Qty. 12&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;bags of MO (1 per Month)<br/>
                      Qty. 6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;24oz Bottle of DO (1 per 2 month)`
          },
          {
            title: `Eco-Safe 8`,
            description: `Qty. 1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;33lb box of chip<br/>
                      Qty. 12&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;bags of MO (1 per Month)<br/>
                      Qty. 6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;24oz Bottle of DO (1 per 2 month)`
          },
          {
            title: `Eco-Safe 12`,
            description: `Qty. 1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;40lb box of chip<br/>
                      Qty. 12&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;bags of MO (1 per Month)<br/>
                      Qty. 6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;24oz Bottle of DO (1 per 2 month)`
          },
        ],
        aLaCarteItems: [
          {
            title: `Bio-Media`,
            description: `20 lb. bag of habitat material for the microorganisms.`
          },
          {
            title: `Microorganisms`,
            description: `2 kg. supply of microorganisms.`
          },
          {
            title: `Deodorizer`,
            description: `1 gallon bottle of deodorizing concentrate.`
          },
          {
            title: `Other`,
            description: `Place an order for something not listed above (Please describe your needs below in the comments section).`
          },
        ]
      }
    },
    methods: {
      createTicket(){
        this.$axios.post('/customer/supplies', this.formData).then(res => {
          console.log(res);
          this.$buefy.snackbar.open({
            message: 'We received your order and sent you a confirmation email!',
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


<style scoped lang="sass">
  .box
    height: 100%
  .b-checkbox.checkbox
    align-items: normal
</style>
