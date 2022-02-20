<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column">
            <h1 class="title">{{posting.title}}</h1>
            <div class="content" v-html="nl2br(posting.description)"></div>

            <h2 class="title is-size-4">Duties Include:</h2>
            <div class="content" v-html="nl2br(posting.duties)"></div>

            <h2 class="title is-size-4">Required Skills:</h2>
            <div class="content">
              <ul>
                <li v-for="(skill, key) in posting.skills" :key="key">{{skill}}</li>
              </ul>
            </div>

            <h2 class="title is-size-4">Nice to Have Qualifications (but we can teach you):</h2>
            <div class="content">
              <ul>
                <li v-for="(niceToHave, key) in posting.niceToHaves" :key="key">{{niceToHave}}</li>
              </ul>
            </div>

            <h2 class="title is-size-4">Job Benefits:</h2>
            <div class="content">
              <ul>
                <li v-for="(benefit, key) in posting.benefits" :key="key">{{benefit}}</li>
              </ul>
            </div>


            <h2 class="title is-size-4">Apply Now</h2>
            <p>To apply please submit your resume to <a :href="`mailto:careers@biohitech.com?subject=[CAREERS] ${posting.title}&amp;body=Hi! I am interested in the ${posting.title} positions. Please Find the attached resume.`">careers@biohitech.com</a></p>
            <br>


            <BackButton/>
            <a class="button is-primary" :href="`mailto:careers@biohitech.com?subject=[CAREERS] ${posting.title}&amp;body=Hi! I am interested in the ${posting.title} positions. Please Find the attached resume.`">Apply via Email</a>
            <a class="button is-primary" :href="posting.externalLink" v-if="!!posting.externalLink">Apply with Indeed</a>
          </div>
        </div>
      </div>
    </section>
    <meta-tags :title="posting.title" :description="posting.description"/>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
      }
    },
    asyncData({ $axios, route }) {
      return $axios.get(`/careers/getById/${route.params.post}`).then(res => {
        return { posting: res.data, isLoaded: false }
      })
    },
    methods: {
      nl2br (val) {
        if (!val) return '';

        return val.replace(/(?:\r\n|\r|\n)/g, '<br />')
      }
    }
  }
</script>

<style scoped lang="sass">


</style>
