<template>
  <div>
    <img :src="bite" alt="bite" />
  </div>
</template>

<script>
import bite from './bite.png'

export default {
  name: "Quiz1Question",
  data() {
    return {
      bite
    }
  }
}
</script>

<style scoped>
  div {
    text-align: center;
  }
</style>