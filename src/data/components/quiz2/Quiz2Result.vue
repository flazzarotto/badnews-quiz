<template>
  <div v-if="goodAnswers === total">
    C'est un sans-faute mais il n'y a vraiment pas de quoi être fière / fier, attendez-vous à passer
    dans une très prochaine Bad News !
  </div>
  <div v-else-if="goodAnswers >= (0.75 * total)">
    Vous avez tout d'un(e) serial killer en puissance ! Vous pourriez être le sujet d'un "en bref",
    encore un peu de persévérance si vous souhaitez passer dans la Bad News du jour !
  </div>
  <div v-else-if="goodAnswers >= (total/ 2)">
    Vous avez de nombreux vices mais ce n'est pas suffisant pour faire de vous le sujet d'une Bad News.
    Vous pouvez tout au plus espérer inspirer une chanson de Cocktail Michel.
  </div>
  <div v-else-if="goodAnswers">
    Vous êtes sûr(e) de connaître le concept de l'émission ?
  </div>
  <div v-else>
    On dirait que vous connaissez parfaitement Bad News mais que vous avez tout fait à l'envers.
    Bravo ! Vous êtes certain(e) de ne jamais passer dans l'émission, mais vous pouvez postuler
    pour le poste d'assistant d'Ariel.
  </div>

  <img v-if="goodAnswers === 0 || goodAnswers >= total / 2" :src="bite" alt="résultats"/>

</template>

<script>
import bite from './bite.png'

export default {
  name: "Quiz1Result1",
  props: {
    result: Object,
    total: Number
  },
  data() {
    return {bite}
  },
  computed: {
    goodAnswers() {
      return this.result['1']
    },
    badAnswers() {
      return this.result['0']
    }
  }
  // setup(props) {
  //   console.log(props.result)
  // }
}
</script>

<style scoped>
  img {
    margin-top: 30px;
  }
</style>