<template>
  <article>
    <h3>
      <b>{{ card.label }}</b>
      {{ card.title }}
      <em>{{ card.tip }}</em>
    </h3>

    <DynamicComponentContainer v-if="card.component" :key="card.component"
                               :component-name="card.component"></DynamicComponentContainer>

    <div class="container">
      <OptionComponent v-for="(option, k) in card.options" :group="card.label"
                       :option="option"
                       :key="k"
                       :selected="option.checked"
                       @click="click"
                       class="option"
      ></OptionComponent>
    </div>
  </article>
</template>

<script>
import OptionComponent from "@/components/OptionComponent";
import DynamicComponentContainer from "@/components/DynamicComponentContainer";

export default {
  name: "CardComponent",
  components: {DynamicComponentContainer, OptionComponent},
  props: {
    card: Object
  },
  methods: {
    click() {
      for (let option of this.card.options) {
        option.mutations.check(document.querySelector(`.answer.${option.simpleLabel} input`).checked)
      }
    }
  }
}
</script>

<style scoped lang="scss">
article {
  text-align: left;
}
h3 {
  font-weight: normal;
}
em {
  font-size: 1rem;
}
em, .option {
  display: block;
}
</style>