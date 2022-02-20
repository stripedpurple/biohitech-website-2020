<template>
  <section class="section">
    <div class="container is-fluid">
      <div class="columns is-desktop">
        <div class="column">
          <b-field label="Title">
            <b-input placeholder="Badass Title" required v-model="jobListing.title"/>
          </b-field>

          <b-field label="Description">
            <b-input type="textarea" rows="10"
                     placeholder="Job Description" required v-model="jobListing.description"/>
          </b-field>

          <b-field label="Duties Include">
            <b-input type="textarea" rows="10"
                     placeholder="A one to two paragraph description of responsibilities" required
                     v-model="jobListing.duties"/>
          </b-field>

          <b-field label="Required Skills">
            <b-input type="textarea" rows="10"
                     :placeholder="`A list of benefits separated by a newline (E.g.):\nJuggling\nDad Jokes\nLego Building`"
                     required v-model.trim="jobListing.skills"/>
          </b-field>

          <b-field label="Nice to Have Qualifications (but we can teach you)">
            <b-input type="textarea" rows="10"
                     :placeholder="`A list of qualifications separated by a newline (E.g.):\nWrench turning\nWord Processing\nDouble Dutch`"
                     required v-model.trim="jobListing.niceToHaves"/>
          </b-field>

          <b-field label="Job Benefits">
            <b-input type="textarea" rows="10"
                     :placeholder="`A list of benefits separated by a newline (E.g.):\nMoney\nHealth Insurance\ntrips to Mars`"
                     required v-model.trim="jobListing.benefits"/>
          </b-field>

          <b-field label="External Application">
            <b-input placeholder="https://indeed.com/example-job (optional)" v-model="jobListing.externalLink"/>
          </b-field>
          <div class="buttons">
            <b-button @click="redirect('/careers')" type="is-danger">Cancel</b-button>
            <b-button @click="saveJob" type="is-success">Save</b-button>
          </div>
        </div>

        <div class="column">
          <p class="title">Preview</p>
          <div class="box has-background-light">
            <p class="title" style="text-transform: capitalize">{{jobListing.title}}</p>
            <p class="title is-size-4">Duties Include</p>
            <div v-html="description"></div>
            <br>

            <p class="title is-size-4">Duties Include</p>
            <div v-html="duties"></div>
            <br>

            <p class="title is-size-4">Required Skills</p>
            <div class="content">
              <ul>
                <li v-for="(item, key) in skills" :key="key">{{item}}</li>
              </ul>
            </div>
            <br>

            <p class="title is-size-4">Nice to Have Qualifications (but we can teach you)</p>
            <div class="content">
              <ul>
                <li v-for="(item, key) in qualifications" :key="key">{{item}}</li>
              </ul>
            </div>
            <br>

            <p class="title is-size-4">Job Benefits</p>
            <div class="content">
              <ul>
                <li v-for="(item, key) in benefits" :key="key">{{item}}</li>
              </ul>
            </div>
            <br>

            <p class="title is-size-4">Apply Now</p>
            <p>To apply please submit your resume to <span class="has-text-info">careers@biohitech.com</span></p>

            <a @click.prevent :href="jobListing.externalLink" class="button is-primary">Apply via Email</a>
            <a @click.prevent :href="jobListing.externalLink" class="button is-primary" v-if="!!jobListing.externalLink">Apply via ...</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "index",
    middleware: ['auth'],
    data() {
      return {
        jobListing: {
          _id: '',
          title: '',
          description: '',
          duties: '',
          skills: '',
          niceToHaves: '',
          benefits: '',
          externalLink: ''
        }
      }
    },
    asyncData({ $axios, route }) {
      return !!route.query.post ? $axios.get(`/careers/getById/${route.query.post}`).then(res => {
        res.data.skills = res.data.skills.join('\n');
        res.data.niceToHaves = res.data.niceToHaves.join('\n');
        res.data.benefits = res.data.benefits.join('\n');
        return { jobListing: res.data}
      }) : null
    },
    computed: {
      description() {
        let tmp = this.jobListing.description;
        return tmp ? tmp.replace(/(?:\r\n|\r|\n)/g, '<br />') : ''
      },
      duties() {
        let tmp = this.jobListing.duties;
        return tmp ? tmp.replace(/(?:\r\n|\r|\n)/g, '<br />') : ''
      },
      skills() {
        let tmp = this.jobListing.skills;
        return tmp ? tmp.split(/(?:\r\n|\r|\n)/) : ''
      },
      qualifications() {
        let tmp = this.jobListing.niceToHaves;
        return tmp ? tmp.split(/(?:\r\n|\r|\n)/) : ''
      },
      benefits() {
        let tmp = this.jobListing.benefits;
        return tmp ? tmp.split(/(?:\r\n|\r|\n)/) : ''
      },
    },
    methods: {
      saveJob() {
        let data = {
          title: this.jobListing.title,
          description: this.jobListing.description,
          duties: this.jobListing.duties,
          skills: this.skills,
          niceToHaves: this.qualifications,
          benefits: this.benefits,
          externalLink: this.jobListing.externalLink,
          slug: slugify(this.jobListing.title)
        };

        let endpoint = 'create';

        if (!!this.jobListing._id) {
          data._id = this.jobListing._id;
          endpoint = 'update'
        }

        this.$axios.post(`/careers/${endpoint}`, data).then(res => {
          if (res.status == 200) {
            this.redirect('/careers')
          } else {
            this.$buefy.toast.open({type: 'is-daanger', message: 'Error occurred while saving!'})
          }
        }).catch(err => {
          this.$buefy.toast.open({type: 'is-danger', message: 'Error occurred while saving!'})
        })
      },
      redirect() {
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/careers')
      }
    }
  }

  // https://gist.github.com/hagemann/382adfc57adbd5af078dc93feef01fe1
  function slugify(string) {
    const a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;'
    const b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------'
    const p = new RegExp(a.split('').join('|'), 'g')

    return string.toString().toLowerCase()
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
      .replace(/&/g, '-and-') // Replace & with 'and'
      .replace(/[^\w\-]+/g, '') // Remove all non-word characters
      .replace(/\-\-+/g, '-') // Replace multiple - with single -
      .replace(/^-+/, '') // Trim - from start of text
      .replace(/-+$/, '') // Trim - from end of text
  }
</script>

<style scoped lang="sass">


</style>
