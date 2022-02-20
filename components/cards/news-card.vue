<template>

  <div style="height: 100%">
    <nuxt-link :to="url" v-if="version === 1">
      <div class="card" style="box-shadow: 0 0.25rem 0.5rem rgba(0,0,0,0.25)">
        <div class="card-image" v-if="imgsrc"
             :style="`background: transparent url('${imgsrc}') center center no-repeat; background-size: cover;`">
          <figure class="image is-16by9">

          </figure>
        </div>

        <div class="card-content">
          <div class="content">
            <p class="title has-text-primary default is-5">{{title}}</p>
            <p class="" v-if="!!dateTime">{{dateTime}}</p>
            <p>{{content}}</p>
          </div>
        </div>
        <footer class="card-footer">
          <nuxt-link class="button is-primary card-footer-item" :to="url">Continue Reading&nbsp;&nbsp;
            <b-icon icon="arrow-right" size="is-small"/>
          </nuxt-link>
        </footer>
      </div>
    </nuxt-link>

    <article class="message is-primary" v-if="version === 2" style="box-shadow: 0 0.25rem 0.5rem rgba(0,0,0,0.25)">
      <div class="message-body">
        <div style="margin-bottom: 0.5rem">
          <p class="title has-text-primary default is-size-4">{{title}}</p>
          <datetime class='subtitle default is-size-6 is-italic' v-if="!!dateTime">{{dateTime | dateFormatter}}</datetime>
        </div>
        <div style="height: 100%; margin-bottom: 0.5rem">
          <div class="is-size-6" v-html="content"></div>
        </div>
        <b-button tag="nuxt-link" :to="url" type="is-primary">Continue Reading&nbsp;&nbsp;
          <b-icon icon="arrow-right" size="is-small"/></b-button>
      </div>
    </article>

  </div>

</template>

<script>
  export default {
    name: "news-card",
    props: {
      title: String,
      content: String,
      dateTime: String,
      imgsrc: String,
      url: String,
      version: {
        type: Number,
        default: 1
      }
    },
    filters: {
      dateFormatter(v) {
        if (!v) return ''

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
</script>

<style scoped lang="sass">

  .message
    height: 100%

    .message-body
      height: 100%
      display: flex
      flex-direction: column
      flex: 1
      justify-content: space-between

    .button
      width: fit-content

  .card
    height: 100%
    display: flex
    justify-content: space-between
    flex-direction: column

    .card-content
      height: 100%

    @media screen and (max-width: 768px)
      .card-image
        display: none

    .content
      p
        line-height: 1.5rem
        margin-bottom: .5rem
        text-align: unset
</style>
