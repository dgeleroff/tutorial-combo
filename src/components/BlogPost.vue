<template>
  <div class="blog-post">
    <h3 id="title" v-bind:style="{ fontSize: fontSize + 'em' }">{{title}}</h3>
    <button v-on:click="fontSize++">
      Enlarge Text
    </button>
    <button v-on:click="fontSize--">
      Delarge Text
    </button>
  </div>
</template>

<script>
export default {
  name: 'blog-post',
  props: {
    title: String,
  },
  data: function () {
    return {
      fontSize: 3
    }
  },
  methods: {
    delarge () {
      var target = document.getElementById("title")
      target.style.fontSize = target.style.fontSize - 0.1
    }
  }

}
</script>

<style>

</style>
