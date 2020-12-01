<template>
  <section id="main-container">
    <h1>
      <img :src="badNewsImage" alt="Bad Quiz"/>
    </h1>
    <QuizComponent v-if="selectedQuiz !== null" :quizId="selectedQuiz" />
    <label>
      <select v-model="selectedQuiz" @change="selectQuiz" v-if="quizzes.length > 1">
        <option :key="selectedQuiz" :value="selectedQuiz">Les autres badquizz...</option>
        <option v-show="k !== selectedQuiz"
                v-for="(quiz, k) in quizzes" :key="k" :value="k">{{ quiz.title }}</option>
      </select>
    </label>
  </section>
</template>

<script>
import QuizComponent from './components/QuizComponent.vue'
import quizzes from "@/quizzes"
import badNewsImage from '@/assets/bad_news.png'

export default {
  name: 'App',
  data() {
    return {
      badNewsImage,
      quizzes,
      selectedQuiz: null
    }
  },
  methods: {
    selectQuiz() {
      if (this.quizzes[this.selectedQuiz]) {
        this.quizzes[this.selectedQuiz].mutations.reset()
      }
    }
  },
  components: {
    QuizComponent
  },
  mounted() {
    if (this.quizzes.length) {
      this.selectedQuiz = 0
      this.selectQuiz(0)
    }
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
html, body {
  padding: 0;
  margin: 0;
}

html {
  height: 100%;
  font-size: 16px;
}

body {
  min-height: 100%;
  background: url("assets/bg.jpg") no-repeat fixed;
  background-size: cover;
  font-size: 100%;
}

figure {
  padding: 0;
  margin: 0;
}

#app {
  min-height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<style scoped lang="scss">
  #main-container {
    padding: 30px 0;
    max-width: 800px;
    margin: auto;
    background: rgba(255,255,255,.4);
    position: absolute;
    min-height: 100%;
    left: 50%;
    width: 100%;
    transform: translateX(-50%);
  }
</style>