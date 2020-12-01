<template>
  <h3>Résultat</h3>
  <div v-if="displayScore">
    <h4>Score</h4>
    <p v-for="(v,k) in score" :key="k">
      <b>{{ k }}</b>: <b>{{ v }}</b> points
    </p>
  </div>
  <DynamicComponentContainer v-for="matched in result" :arguments="{result: score, total: questionNumber}"
                            :key="matched.component"
                            :component-name="matched.component"></DynamicComponentContainer>
  <FallbackComponent v-if="!result.length"></FallbackComponent>
</template>

<script>
import DynamicComponentContainer from "@/components/DynamicComponentContainer";
import FallbackComponent from "@/components/FallbackComponent";

export default {
  name: "ResultComponent",
  props: {
    score: Object,
    result: Object,
    questionNumber: Number,
    displayScore: {
      default: true,
      type: Boolean
    }
  },
  components: {
    FallbackComponent,
    DynamicComponentContainer
  },
  // setup(props) {
  //   console.log(props.result)
  // }
}
</script>

<style scoped>
p {
  text-align: left;
}

</style>