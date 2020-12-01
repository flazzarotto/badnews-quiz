import GenericProxy from "@/lib/GenericProxy"
import anyBase from "any-base"
import CardFactory from "@/entities/Card";

const {romanice, symbols} = require('romanice')
const unicodeConverter = romanice(symbols.UNICODE)
const anyBaseConverter = anyBase(anyBase.DEC, 'abcdefghijklmnopqrstuvwxyz')

const QuizTypes = ['quiz', 'test']
export const QuizLabelTypes = {
    a: (number) => {
        return anyBaseConverter(number + '') + ')'
    },
    '1': (number) => {
        return (1 + number) + ')'
    },
    I: (number) => {
        return unicodeConverter.toRoman(1 + number) + '.'
    }
}

class Quiz {

    _cards = []
    _created = new Date()
    _updated

    get updated() {
        return this._updated
    }

    get created() {
        return this._created
    }

    get type() {
        return this._type
    }

    get labelType() {
        return this._labelType
    }

    get answerLabelType() {
        return this._answerLabelType
    }

    /**
     * @param type {string}
     */
    set type(type) {
        this._type = ((QuizTypes.indexOf(type) >= 0) ? type : 'quiz')
    }

    /**
     * @param labelType {string}
     */
    set labelType(labelType) {
        this._labelType = QuizLabelTypes[labelType] ? labelType : '1'
    }

    /**
     * @param answerLabelType {string}
     */
    set answerLabelType(answerLabelType) {
        this._answerLabelType = QuizLabelTypes[answerLabelType] ? answerLabelType : 'a'
    }

    set cards(questions) {
        let number = 0
        for (let question of questions) {
            this._cards.push(CardFactory({
                ...question, label: QuizLabelTypes[this._labelType](number++),
                labelType: this.answerLabelType,
                quiz: this
            }))
        }
    }

    get cards() {
        return this._cards
    }

    get score() {
        return this._cards.reduce((prev, curr) => {
            for (let prop in curr.results) {
                prev[prop] = (prev[prop] ?? 0) + curr.results[prop]
            }
        }, {})
    }

    get title() {
        return this._title
    }

    get displayScore() {
        return this._displayScore
    }

    constructor({
                    title, type = 'quiz', resultTypes, labelType = '1',
                    answerLabelType = 'a', questions, description, results, displayScore = true,
                    previewComponent = null
                }) {
        this._title = title
        this.type = type
        this._resultTypes = resultTypes
        this.labelType = labelType
        this.answerLabelType = answerLabelType
        this.cards = questions
        this._description = description
        this._mutations(this).update()
        this._results = results
        this._displayScore = displayScore
        this._status = previewComponent ? 'preview' : 'answer'
        this._preview = previewComponent
        this._current = 0
    }

    get current() {
        return this._current
    }

    get preview() {
        return this._preview
    }

    get status() {
        return this._status
    }

    _mutations(quiz) {
        return {
            update() {
                quiz._updated = new Date()
            },
            updateStatus(status) {
                if (status === 'preview' && !quiz.preview) {
                    status = 'answer'
                }
                if (quiz._status === 'preview' && quiz._status !== 'preview') {
                    quiz._created = new Date()
                }
                quiz._current = 0
                quiz._status = status
                this.update()
            },
            reset() {
                for (let card of quiz.cards) {
                    for (let option of card.options) {
                        option.mutations.check(undefined)
                    }
                }
                quiz._created = new Date()
                this.updateStatus(quiz.preview ? 'preview' : 'answer')
            },
            setCurrent(number) {
                quiz._current = number
            }
        }
    }

    get description() {
        return this._description
    }

    get result() {
        return this.cards.reduce((prev, curr) => {
            for (let prop in curr.results) {
                prev[prop] =
                    (prev[prop] ?? 0)
                    + curr.results[prop]
            }
            return prev
        }, {})
    }

    get matchedResults() {
        const currentScore = this.result
        return this._results
            .filter(value => value.condition(currentScore))
            .sort((value1, value2) => currentScore[value1.identifier] - currentScore[value2.identifier])
    }

}

export default GenericProxy(Quiz, true)