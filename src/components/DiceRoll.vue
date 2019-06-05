<template>
  <div class="dice-roll">
    <button v-on:click="callAPI">Roll the Dice!😎</button>
    <div v-if="result.length!==0">
      <h4>{{result.message}}</h4>
      <img id="dice" v-bind:src="dice[result.number-1]">
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'dice-roll',
  data: function() {
    return {
      result: '',
      dice: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Dice-1-b.svg/557px-Dice-1-b.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Dice-2-b.svg/557px-Dice-2-b.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Dice-3-b.svg/557px-Dice-3-b.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Dice-4-b.svg/557px-Dice-4-b.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Dice-5-b.svg/557px-Dice-5-b.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Dice-6-b.svg/557px-Dice-6-b.svg.png'
      ],
    }
  },
  methods: {
    callAPI: function(){
      const client = axios.create({
        baseURL: 'https://kcl82v4xol.execute-api.us-east-1.amazonaws.com/dev/'
      })
      client.get('/')
        .then((response) => {
          var data = response.data
          this.result = data
          console.log(data)
        })
        .catch((error) => {
          console.log('got an error trying to get lambda: ' + error);
        })
    }
  },
}
</script>

<style>
#dice {
  height: 100px;
  width: 100px;
}
</style>
