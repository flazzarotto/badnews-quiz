import data from "@/data/quiz";
import QuizFactory from "@/entities/Quiz";

const quizzes = []

for (let quiz of data) {
    let q = QuizFactory(quiz)
    if (q.active) {
        quizzes.push(q)
    }
}

export default quizzes