<template>
  <label :class="{answer: 1, [option.simpleLabel]: 1}">
    <input type="radio" v-if="!option.multiple" :name="group" @click="this.$emit('click', option.label)"
           :value="option.label" :checked="selected"/>
    <input type="checkbox" v-else @click="this.$emit('click', option.label)" :value="option.label"
           :checked="selected"/>
    <span>
      <b>{{ option.label }}</b> {{ option.text }}
    </span>
  </label>
</template>

<script>
export default {
  name: "OptionComponent",
  props: {
    option: Object,
    group: String,
    selected: {
      type: Boolean,
      default: false
    }
  },
  computed() {

  },
  methods: {},
  mounted() {

  }
}
</script>

<style scoped>

</style>