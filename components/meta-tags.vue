<template></template>
<script>
  export default {
    name: "meta-tags",
    head() {
      return {
        title: `${this.title} | BioHiTech`,
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          {
            hid: 'description',
            name: 'description',
            content: this.description.slice(0, 150) + '...'
          },
          // Facebook
          {hid: "og:url", property: "og:url", content: `https://biohitech.com${this.path}`},
          {hid: "og:type", property: "og:type", content: "website"},
          {
            hid: "og:title",
            property: "og:title",
            content: `${this.title} | BioHiTech`
          },
          {
            hid: "og:description",
            property: "og:description",
            content: this.description.slice(0, 150) + '...'
          },
          {hid: "og:image", property: "og:image", content: `https://biohitech.com${this.img}`},
          // twitter
          {hid: "twitter:url", property: "twitter:url", content: `https://biohitech.com${this.path}`},
          {hid: "twitter:card", name: "twitter:card", content: "summary_large_image"},
          {
            hid: "twitter:title",
            name: "twitter:title",
            content: `${this.title} | BioHiTech`
          },
          {
            hid: "twitter:description",
            name: "twitter:description",
            content: this.description.slice(0, 150) + '...'
          },
          {hid: "twitter:image", name: "twitter:image", content: `https://biohitech.com${this.img}`},
        ],
        link: [
          {
            rel: "canonical",
            href: `https://biohitech.com${this.$route.fullPath}`
          }
        ]
      }
    },
    props: {
      title: {
        type: String,
        default: "Innovative Food Waste and Energy Solutions | BioHiTech"
      },
      description: {
        type: String,
        default: "Smart Solutions that Drive Zero Waste..."
      },
      img: {
        type: String,
        default: "/img/hand-leaf-banner.jpg"
      },
      url: {
        type: String,
        default: ''
      }
    },
    computed: {
      path() {
        (!this.url || this.url === '') ? this.$route.fullPath : this.url
      }
    }
  }
</script>
