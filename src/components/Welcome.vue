<template>
  <div class="welcome">
    <h2>Welcome!</h2>
    <div class="container">
      <div class="row">
        <div class="col col--md--4 card card--shadow-depth-3">
          <form @submit.prevent="redirectCoins">
            <input v-model="coinName" type="text" placeholder="search a cryptocurrency!"/>
            <input type="submit" />
          </form>
          <h3>This will redirect you to the <span class="code">/coins/{id}</span> route!</h3>
        </div>
        <div class="col col--md--1 ">

        </div>
        <div class="col col--md-- card card--shadow-depth-3">
          <yes-no></yes-no>
        </div>
      </div>
      <br />
      <div class="row">
        <div class="col col--md--1">

        </div>
        <div class="col col--md--10 card card--shadow-depth-3">
          <blog-post title="woah!" ></blog-post>
        </div>
      </div>
    </div>

    <br />

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

<style lang="scss">
@import '~@causeway/core/dist/spa.scss';
@import '~@causeway/core/dist/base/breakpoints';
@import "~@causeway/core/dist/utilities/_variables.scss";
@import "~@causeway/core/dist/utilities/_helpers.scss";
@import "~@causeway/core/dist/base/_icon_backgrounds.scss";
@import "~@causeway/core/dist/base/_breakpoints.scss";
@import "~@causeway/core/dist/base/_buttons.scss";
@import '~@causeway/core/dist/base/display';
@import '~@causeway/core/dist/base/icons';
@import '~@causeway/core/dist/base/lists';
@import "~@causeway/core/dist/base/_grid.scss";
@import "~@causeway/core/dist/blocks/_card.scss";

.code {
  font-family: monospace;
}
</style>
