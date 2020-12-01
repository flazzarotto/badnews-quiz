<template>
  <DynamicComponentContainer @preview-click="endPreview()"
                             :component-name="quiz.preview" v-if="quiz.status==='preview'"></DynamicComponentContainer>
  <section v-else>
    <h2>{{ quiz.title }}</h2>
    <p>{{ quiz.description }} ({{ quiz.cards.length }} questions)</p>
    <small v-if="false">{{ updated }}</small>

    <div class="container">
      <div class="quiz-block" v-if="quiz.status !== 'result'">
        <CardComponent :card="quiz.cards[current]"></CardComponent>
        <nav id="buttonNav">
          <button v-if="prev !== null" @click="goto(prev)">&lt;</button>
          <button :class="{disabled: !answered}" v-if="next !== null" @click="goto(next)">&gt;</button>

          <button v-if="answeredAll" @click="quiz.mutations.updateStatus('result')">
            Résultats du test !
          </button>
        </nav>
      </div>
      <div class="quiz-block" v-if="quiz.status === 'result'">
        <ResultComponent :result="quiz.matchedResults" :score="finalResult"
                         :question-number="quiz.cards.length"
                         :displayScore="quiz.displayScore"></ResultComponent>
        <div class="reset-quiz">
          <button @click="reset()">Modifier mes réponses</button>
          <button @click="reset(true)">Recommencer à zéro</button>
        </div>
      </div>

      <div class="cheatsheet" v-if="isDev">
        <h4>final result</h4>
        <pre>{{ JSON.stringify(finalResult, null, '\t') }}</pre>

        <h4>current question result</h4>
        <pre>{{ JSON.stringify(quiz.cards[current].results, null, '\t') }}</pre>
      </div>
    </div>

  </section>
</template>

<script>
import CardComponent from "@/components/CardComponent"
import quizzes from "@/quizzes"
import ResultComponent from "@/components/ResultComponent";
import DynamicComponentContainer from "@/components/DynamicComponentContainer";

export default {
  name: "QuizComponent",
  components: {DynamicComponentContainer, ResultComponent, CardComponent},
  props: {
    quizId: Number
  },
  data() {
    return {
      timer: null,
      isDev: process.env.VUE_APP_DEV === "1"
    }
  },
  methods: {
    endPreview() {
      this.quiz.mutations.updateStatus('answer')
    },
    reset(nukeAnswers = false) {
      if (nukeAnswers) {
        this.quiz.mutations.reset()
      }
      this.quiz.mutations.updateStatus('preview')
    },
    goto(number) {
      this.quiz.mutations.setCurrent(number)
    },
    answeredNumber(number) {
      this.quiz.updated
      return Object.keys(this.quiz.cards[number].results).length
    }
  },
  computed: {
    current() {
      return this.quiz.current
    },
    quiz() {
      return quizzes[this.quizId]
    },
    answered() {
      return this.answeredNumber(this.current)
    },
    updated() {
      return Math.round((this.quiz.updated - this.quiz.created) / 1000)
    },
    answeredAll() {
      for (let n in this.quiz.cards) {
        if (!this.answeredNumber(n)) {
          return false
        }
      }
      return true
    },
    finalResult() {
      return this.quiz.result
    },
    last() {
      return this.quiz.cards.length - 1
    },
    prev() {
      if (this.current > 0) {
        return this.current - 1
      }
      return null
    },
    next() {
      if (this.current < this.last) {
        return this.current + 1
      }
      return null
    }
  },
  mounted() {
    this.timer = setInterval(() => {
      if (this.quiz.status === 'answer') {
        this.quiz.mutations.update()
      }
    }, 1000)
  },
  unmounted() {
    clearInterval(this.timer)
  }
}
</script>

<style scoped lang="scss">

section {
  padding: 15px;
  position: relative;
}

.container {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  position: relative;
  padding-right: 150px;
}

.quiz-block {
  flex-grow: 1;
}

.cheatsheet {
  text-align: left;
  max-width: 150px;
  padding-left: 15px;
  margin-right: -150px;

  &:before {
    font-style: italic;
    text-transform: uppercase;
    content: attr(class);
  }
}

.disabled {
  opacity: .5;
  pointer-events: none;
}

#buttonNav {
  position: absolute;
  top: 0;
  text-align: center;
  width: 150px;
  right: 0;
}

.reset-quiz {
  margin-top: 30px;
}

</style>