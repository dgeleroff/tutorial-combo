<template>
  <div class="welcome">
    <h2>Welcome!</h2>
    <form @submit.prevent="redirectCoins">
      <input v-model="coinName" type="text" placeholder="search a currency!"/>
      <input type="submit" />
    </form>
  </div>
</template>

<script>
  export default {
    name: 'Welcome',
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
