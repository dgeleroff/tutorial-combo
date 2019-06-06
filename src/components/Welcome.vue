<template>
  <div class="welcome">
    <h2>Welcome!</h2>
    <form @submit.prevent="redirectCoins">
      <input v-model="coinName" type="text" placeholder="search a currency!"/>
      <input type="submit" />
    </form>
    <yes-no></yes-no>
  </div>
</template>

<script>
  import YesNo from '@/components/YesNo.vue'
  export default {
    name: 'Welcome',
    components: {
      YesNo
    },
    data () {
      return {
        coinName: ''
      }
    },
    methods: {
      redirectCoins () {
        var coinRoute = "/coins/"+this.coinName
        this.$router.push(coinRoute)
      }
    }
  }
</script>
