<template>
  <code v-if="name">
    Error encountered during result rendering (missing template for <b>{{ name }}</b>)
  </code>
  <div v-else>
    Oh non ! Vous avez complètement raté le test !
  </div>
</template>

<script>
export default {
  name: "FallbackComponent",
  props: {
    name: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  code {
    color: #f33;
    display: block;
    b {
      color: #500;
    }
  }
  div {
    display: block;
  }
</style>