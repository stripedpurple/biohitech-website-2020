<template>
  <div>
    <section class="section">
      <div class="container is-fluid">
          <p class="title">Total Contacts: {{contacts.length}}</p>
        <div class="box has-background-primary">

          <label class="label">Search Contacts</label>
          <b-field>
            <b-input placeholder="search" icon="magnify" expanded v-model="search"/>
            <b-select placeholder="Select a name" v-model="selectedDateRange">
              <option
                v-for="(d, key) in dateRange"
                :value="d.val"
                :key="key">
                {{ d.text }}
              </option>
            </b-select>
          </b-field>
        </div>

        <div class="columns is-multiline">
          <div class="column is-one-quarter-desktop is-half-tablet" v-for="(contact, key) in filteredContacts">
            <div class="card has-background-light">
              <header class="card-header has-background-primary">
                <div class="card-header-title"><b-icon icon="account"/>&nbsp;&nbsp;&nbsp;{{contact.name}}&nbsp;&nbsp;&nbsp;&nbsp;
                  <small class="has-text-light is-size-6"><wbr>({{contact.date | dateFormatter}})</small></div>
              </header>
              <div class="card-content">
                <div class="content">
                  <p><strong>Company: </strong>{{contact.company}}</p>
                  <p><strong>Email: </strong>{{contact.email}}</p>
                  <p><strong>Lead Source: </strong>{{contact.leadSource}}</p>
                  <p><strong>Phone: </strong>{{contact.phone}}</p>
                  <p><strong>Message: </strong>{{`${contact.message.substring(0,150)}...`}}</p>
                  <a href="#" @click.prevent="contactModal=contact; modalOpen=true">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <b-modal :active.sync="modalOpen" v-on:close="modalOpen=false" scroll="keep">
      <div class="box" v-if="modalOpen">
          <p><strong>Name: </strong>{{contactModal.name}}</p>
          <p><strong>Date: </strong>{{contactModal.date | dateFormatter}}</p>
          <p><strong>Company: </strong>{{contactModal.company}}</p>
          <p><strong>Email: </strong>{{contactModal.email}}</p>
          <p><strong>Lead Source: </strong>{{contactModal.leadSource}}</p>
          <p><strong>Phone: </strong>{{contactModal.phone}}</p>
          <p><strong>Message: </strong>{{contactModal.message}}</p>
      </div>
    </b-modal>

    <b-loading :is-full-page="true" :active.sync="isLoading"></b-loading>
  </div>
</template>

<script>
  export default {
    name: "contacts",
    middleware: ['auth'],
    data() {
      return {
        modalOpen: false,
        contactModal: null,
        search: '',
        isLoading: true,
        selectedDateRange: null,
        dateRange: [
          {val: 0, text: '1 Day'},
          {val: 0, text: '1 week'},
          {val: 0, text: '1 Month'},
          {val: 0, text: '3 Months'},
          {val: 0, text: '6 Months'},
          {val: 0, text: '1 Year'},
          {val: 0, text: 'All'},
        ],
        contacts: []
      }
    },
    computed: {
      filteredContacts() {
        return !!this.search ? this.contacts.filter(x => {
          // return console.log(x);
          for (let y in x) {
            if (!!x[y] && x[y].toString().toLowerCase().includes(this.search)) return true
          }

          return false

        }) : this.contacts
      }
    },
    methods: {
      getContacts() {
        console.log('here');
        this.isLoading = true;
        this.$axios.get(`/contact/get/${this.selectedDateRange}`).then(res => {
          this.contacts = res.data;
          this.isLoading = false;
        }).catch(err => {
          this.isLoading = false;
          this.$buefy.toast.open({
            message: 'An error occurred while fetching contacts. Try again later.',
            type: 'is-danger',
            duration: 3500
          })
        })
      }
    },
    mounted() {
      this.selectedDateRange = dateMagic(7, 'days');
      for (let i = 0; i < this.dateRange.length; i++) {
        if (this.dateRange[i].text === '1 Day')
          this.dateRange[i].val = dateMagic(1, 'day');
        if (this.dateRange[i].text === '1 week')
          this.dateRange[i].val = this.selectedDateRange;
        if (this.dateRange[i].text === '1 Month')
          this.dateRange[i].val = dateMagic(1, 'month');
        if (this.dateRange[i].text === '3 Months')
          this.dateRange[i].val = dateMagic(3, 'months');
        if (this.dateRange[i].text === '6 Months')
          this.dateRange[i].val = dateMagic(6, 'months');
        if (this.dateRange[i].text === '1 Year')
          this.dateRange[i].val = dateMagic(1, 'year');
      }

      this.getContacts();
    },
    watch: {
      selectedDateRange: function () {
        this.getContacts()
      }
    },
    filters: {
      dateFormatter(v) {
        if (!v) return '';

        v = new Date(v);
        return `${months[v.getMonth()]} ${v.getDate().toString().length === 1 ? '0' + v.getDate() : v.getDate()}, ${v.getFullYear()}`
      }
    }
  }

  let months = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December',
  }

  let dateMagic = (measurement, unit) => {
    unit = unit.toLowerCase();
    measurement = parseInt(measurement);
    let today = new Date();
    let dt;
    switch (unit) {
      case 'day':
      case 'days':
        dt = today.setDate(today.getDate() - measurement);
        break;
      case 'month':
      case 'months':
        dt = today.setMonth(today.getMonth() - measurement);
        break;
      case 'year':
      case 'years':
        dt = today.setFullYear(today.getFullYear() - measurement);
        break;
    }

    return dt
  }
</script>

<style scoped lang="sass">
  ::v-deep input.input
    color: #333333

  .card-header-title
    display: block

  .card
    height: 100%
    overflow-wrap: break-word

    .content p:not(:last-child),
    p:not(:last-child)
      text-align: unset
      margin-bottom: 0.5rem
      padding-bottom: 0.5rem
      border-bottom: 1px solid rgba(0, 0, 0, 0.1)


</style>
