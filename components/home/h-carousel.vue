<template>
  <section>
    <b-carousel
      :autoplay="true"
      :pause-hover="false"
      has-drag
      :interval=3000
    >
      <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
        <section :class="`hero is-large hero-${carousel.background}`">
          <div class="hero-body">
            <p class="subtitle">{{carousel.subtitle}}</p>
            <h1 class="title is-size-1-desktop">{{carousel.title}}</h1>
            <div v-html="carousel.content"></div>
            <br/>
            <b-button tag="nuxt-link" :to="carousel.cta.link" type="is-light" size="is-large" outlined v-if="!!carousel.cta">{{carousel.cta.text}}</b-button>
          </div>
        </section>
      </b-carousel-item>
    </b-carousel>
  </section>
</template>

<script>
  export default {
    name: "h-carousel",
    data() {
      return {
        carousels: [
          {
            title: 'Smart Solutions that Drive Zero Waste',
            subtitle: 'BIOHITECH GLOBAL',
            content: '',
            cta: {text: 'Renewable Fuel', link: '/renewables'},
            color: 'info',
            background: 'leaf-in-hand'
          },
          {
            title: 'Food Waste Measurement and Disposal',
            subtitle: 'Dispose of food smartly',
            content: '',
            cta: {text: 'Digesters', link: '/digesters'},
            color: 'info',
            background: 'tree-in-hand'
          },
          {
            title: 'Patented Food Waste Analytics',
            subtitle: 'BioHiTech',
            content: '',
            cta: {text: 'Food Waste Analytics', link: '/digesters/cloud'},
            color: 'info',
            background: 'cloud'
          },
          {
            title: 'Smart, Safe Disinfecting Technology\n',
            subtitle: 'Environmental Solutions',
            content: '',
            cta: {text: 'Altapure AP-4™', link: '/altapure'},
            color: 'info',
            background: 'school-children'
          },
          {
            title: '',
            subtitle: 'BioHiTech PROMISE',
            content: `<br><p class="is-size-3-desktop has-text-white">It's not me. Or you. Or them. <strong class="has-text-white">It's us.</strong></p><p class="is-size-3-desktop has-text-white">It's not mine. Or his. Or hers. Or theirs. <strong class="has-text-white">It's ours.</strong></p><p class="is-size-3-desktop has-text-white">It's not this. Or that. Or the other thing. <strong class="has-text-white">It's everything.</strong></p><p class="is-size-3-desktop has-text-white">It's not today. Or tomorrow. Or another time. <strong class="has-text-white">It's now.</strong></p>`,
            color: 'primary',
            background: 'heart-tree'
          }
        ],
      }
    }
  }
</script>
