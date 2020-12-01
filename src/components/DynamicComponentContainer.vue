<template>
  <div>
    <component @preview-click="$emit('preview-click')" v-bind="arguments"
               class="dynamic" :is="componentName" :key="componentName" :item="componentName"/>
    <FallbackComponent :name="componentName" v-if="components.indexOf(componentName) === -1"></FallbackComponent>
  </div>
</template>

<script>
import FallbackComponent from "@/components/FallbackComponent"
import components from '@/data/components/index'

export default {
  name: "DynamicComponentContainer",
  props: {
    componentName: String,
    arguments: Object
  },
  computed: {
    components() {
      return Object.keys(components)
    }
  },
  components: {
    FallbackComponent,
    ...components
  }
}
</script>

<style lang="scss">
.dynamic {
  img {
    box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.3);
  }
}
</style>
