<template>
  <div>
    <section class="">
<!--      <div class="hero-body">-->
        <div class="box">
          <p class="has-text-centered has-text-white">
            <b-icon icon="account-circle" size="is-huge"/>
          </p>
          <h1 class="title has-text-white has-text-centered">Login</h1>
          <form action="#" @submit.prevent="loginWith(loginInfo)">
            <b-field label="email">
              <b-input type="email" placeholder="beejay@example.com" v-model="loginInfo.username"/>
            </b-field>

            <b-field label="password">
              <b-input type="password" placeholder="••••••••" v-model="loginInfo.password"/>
            </b-field>

            <b-button tag="input" native-type="submit" type="is-light" class="is-fullwidth" value="Login" outlined/>
          </form>
        </div>
<!--      </div>-->
    </section>
    <meta-tags title="Administrative Login" description="Smart Solutions that Drive Zero Waste"/>
  </div>
</template>

<script>
  export default {
    name: "login",
    data() {
      return {
        loginInfo: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      loginWith(loginInfo) {
          this.$auth.loginWith('local',{
            data: loginInfo
          }).then(res => {
            console.log(res);
          }).catch(err => {
            console.log(err);
            this.$buefy.toast.open({
              message: "Error logging in!",
              duration: 3000,
              type: 'is-danger'
            })
          })
      }
    }
  }
</script>

<style scoped lang="sass">
  #main-content
    margin: 0
  section
    background: #333333 url("/img/eric-knoll-Z1GutcSMloc-unsplash-1200.jpg") center center no-repeat
    background-size: cover
    display: flex
    align-items: center
    justify-content: center
    min-height: 100vh

    .box
      background: rgba(0,0,0,0.25)
      border-radius: .5rem
      max-width: 500px
      width: 100%
      padding: 2rem
      border: 1px solid rgba(255,255,255,0.25)
      margin: 0 1rem
      backdrop-filter: blur(20px) saturate(180%)
      @supports not (backdrop-filter: blur())
        background: rgba(0,0,0,0.75)

      .field::v-deep
        .control input.input,
        label.label
          color: white

        .control input.input
          background: transparent
          outline: none
          box-shadow: none
          border: none
          border-bottom: 1px solid rgba(255,255,255,0.25)

          &::placeholder
            color: white
            opacity: 0.5
          &::-ms-input-placeholder
            color: white
          &::-ms-input-placeholder
            color: white

    .icon.is-huge::v-deep
      width: 12rem
      height: 12rem
      .mdi-24px.mdi-set, .mdi-24px.mdi:before
        font-size: 12rem
        line-height: 100%
</style>
