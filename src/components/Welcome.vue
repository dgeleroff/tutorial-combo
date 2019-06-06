<template>
  <div class="welcome">
    <h2>Welcome!</h2>
    <form @submit.prevent="redirectCoins">
      <input v-model="coinName" type="text" placeholder="search a currency!"/>
      <input type="submit" />
    </form>
    <yes-no></yes-no>
    <br />
    <blog-post title="woah!" ></blog-post>
  </div>
</template>

<script>
  import YesNo from '@/components/YesNo.vue'
  import BlogPost from '@/components/BlogPost.vue'

  export default {
    name: 'Welcome',
    components: {
      YesNo,
      BlogPost
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
