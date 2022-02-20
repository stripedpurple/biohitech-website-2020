<template>
  <div>
    <section class="hero is-large hero-careers">
      <div class="hero-body">
        <h1 class="subtitle">BIOHITECH Careers</h1>
        <p class="title is-size-1-desktop">Join the team that's working toward <br>a greener tomorrow</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-full" v-if="!!$auth.user">
            <nuxt-link class="button is-success" to="/careers/edit">
              <b-icon icon="plus"/>&nbsp;&nbsp;&nbsp;&nbsp;Add New Job
            </nuxt-link>
          </div>
          <div class="column is-7-desktop is-full">
            <h2 class="title">Join Us to Help Revolutionize an Industry.</h2>
            <p>BioHiTech is always looking for bold individuals with a relentless passion for change. We want team
              members with not only industry expertise, but also a relentless thirst for success. Changing an industry
              is hard work. Are you up for the challenge?</p>

            <p>Working at BioHiTech provides not only the opportunity to change an industry but also to change the
              world.</p>

            <p>Interested in joining the team. Contact <a href="mailto:careers@biohitech.com">careers@biohitech.com</a>
            </p>
          </div>

          <div class="column is-5-desktop is-full">
            <figure class="image is-16by9">
              <img loading="lazy" src="/img/globe-in-hand-500.jpg" alt="globe in hand">
            </figure>
          </div>
          <div class="column">
            <h3 class="title is-size-4">Current Available Positions</h3>

            <div class="columns is-multiline">
              <div class="column is-half" v-if="!careers">We currently have no openings, but we are always on the look
                out
                for talented people
              </div>
              <div class="column is-full" v-for="(career, key) in careers" v-if="!!careers">
                <p><strong>{{career.title}}</strong></p>
                <div class="content" v-html="career.description"></div>
                <nuxt-link :to="`/careers/${career.slug}`">
                  <b-button type="is-primary">Apply Now</b-button>
                </nuxt-link>
                <b-button type="is-danger" @click="confirmDelete(career._id)" v-if="!!$auth.user">
                  <b-icon icon="delete"/>
                </b-button>
                <nuxt-link :to="`/careers/edit?post=${career.slug}`" class="button is-info" v-if="!!$auth.user">
                  <b-icon icon="pencil"/>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <meta-tags title="Careers" description="BioHiTech is always looking for bold individuals with a relentless passion for change. We want team members with not only industry expertise..."/>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        careers: null,
      }
    },
    asyncData({$axios}) {
      return $axios.get(`/careers/getAll`).then(res => {
        return {careers: res.data}
      })
    },
    methods: {
      confirmDelete(deleteKey) {
        this.$buefy.dialog.confirm({
          title: 'Deleting Job Posting',
          message: 'Are you sure you want to <b>delete</b> this job? This action cannot be undone.',
          confirmText: 'Delete',
          type: 'is-danger',
          hasIcon: true,
          onConfirm: () => this.deleteJob(deleteKey)
        })
      },
      deleteJob(deleteKey) {
        this.$axios.delete(`/careers/deleteById/${deleteKey}`).then(res => {
          if (res.status == 200) {
            this.$buefy.toast.open({type: 'is-success', message: 'Job deleted!'});
            this.careers = this.careers.filter(x => x._id !== deleteKey)
          } else {
            this.$buefy.toast.open({type: 'is-daanger', message: 'Error deleting job!'});
          }
        }).catch(err => {
          if (err) {
            this.$buefy.toast.open({type: 'is-daanger', message: 'Error deleting job!'});
          }
        })
      }
    }
  }
</script>
