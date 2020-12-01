<template>
  <div class="component">
    <div v-if="this.result[bestResult]">
      <span>
        Bravo ! On dirait que vous êtes le candidat parfait pour vous faire
        <b>{{ trans(bestResult) }}</b>
      </span>
      <span v-for="(result ,index) in otherResults" :key="index">
        <span v-if="index === 0">, mais aussi <b>{{ trans(result.name) }}</b></span>
        <span v-else>, ou encore <b>{{ trans(result.name) }}</b></span>
      </span>
      <span> !</span>
    </div>
    <span v-else>
      Eh bien ! On dirait que vous n'avez rien à vous faire agrandir ou élargir !
    </span>
  </div>
</template>

<script>
export default {
  name: "Quiz1Result",
  props: {
    result: {
      type: Object
    },
    total: Number
  },
  methods: {
    trans(name) {
      return {a: 'élargir l\'anus', b: 'agrandir la bite', v: 'écarter la vulve'}[name]
    }
  },
  computed: {
    otherResults() {
      let others = []
      for (let name in this.result) {
        if (name === this.bestResult) {
          continue
        }
        let value = this.result[name]
        if (value > this.total*.333333) {
          others.push({name, value})
        }
      }
      return others
    },
    bestResult() {
      let bestVal = Object.values(this.result).reduce((prev, curr, index, arr) => {
        if (prev > -1 && arr[prev] > curr) {
          return prev
        }
        return index
      }, -1)
      return Object.keys(this.result)[bestVal]
    }
  }
}
</script>

<style lang="scss" scoped>
  div.component {
    font-size: 0;
    span {
      font-size: 1rem;
    }
  }
</style>