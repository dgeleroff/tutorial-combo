<template>
  <div class="coins">
    <div v-if="validSearch">
      <p>
        Name: {{coin.name}} ({{coin.symbol}})
      </p>
      <p>
        Price USD: ${{coin.price_usd}}
      </p>
    </div>
    <div v-else>
      <p>
        Sorry, we couldn't find that cryptocurrency :(
      </p>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'Coins',
    data () {
      return {
        coin: {},
        validSearch: true,
      }
    },
    created () {
      this.fetchData()
    },
    watch: {
      '$route': 'fetchData'
    },
    methods: {
      fetchData () {
          this.validSearch = true
          axios.get('https://api.coinmarketcap.com/v1/ticker/'+this.$route.params.id+'/')
          .then((resp) => {
            this.coin = resp.data[0]
            console.log(resp)
          })
          .catch((err) => {
            this.validSearch = false
            console.log(err)
          })
      }
    }
  }
</script>
