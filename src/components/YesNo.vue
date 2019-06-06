<template>
  <div class="yes-no">
    <h2>
      Ask any yes/no question! <input v-model="question"/>
    </h2>
    <h3>{{ answer }}</h3>
    <!-- <img v-bind:src="dynamicUrl"/> -->
  </div>
</template>

<script>
import _ from 'lodash'
import axios from 'axios'

export default{
  name: 'yes-no',
  data () {
    return {
      question: '',
      answer: ':/ Cant give you an answer until you ask a question!',
      dynamicUrl: ''
    }
  },
  watch: {
    question: function () {
      // whenever question changes, this runs
      this.answer = 'Waiting for you to finish typing...',
      this.dynamicUrl = '',
      this.debouncedGetAnswer()
    }
  },
  created: function () {
    // _.debounce helps limit access usually for expensive operations
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
  },
  methods: {
    getAnswer: function () {
      if(this.question.length === 0) {
        this.answer = ':/ Cant give you an answer until you ask a question!'
        return
      }
      if (this.question.indexOf('?') === -1) {
        this.answer = 'Please end with a question mark (?)'
        return
      }

      this.answer = 'Thinking... '

      var vm = this
      const client = axios.create({
        baseURL: 'https://yesno.wtf'
      })
      client.get('/api')
      .then(function (response) {
        // var response =
        vm.answer = _.capitalize(response.data.answer)
        vm.dynamicUrl = _.capitalize(response.data.image)
      })
      .catch(function (error) {
        vm.answer = 'Error! Couldn\'t reach the API' + error
      })

    }
  }
}
</script>

<style>

</style>
