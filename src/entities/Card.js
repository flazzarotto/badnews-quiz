import GenericProxy from "@/lib/GenericProxy"
import OptionFactory from "@/entities/Option"
import {QuizLabelTypes} from "@/entities/Quiz"

class Card {

    _multiple
    _options = []

    set options(answers) {
        let number = 0
        for (let answer of answers) {
            let option = OptionFactory({
                results: answer.results,
                text: answer.text,
                resultsNotChecked: answer.resultsNotChecked || {},
                multiple: this._multiple,
                label: QuizLabelTypes[this._labelType](number++),
                quiz: this._quiz
            })
            this._options.push(option)
        }
    }

    get options() {
        return this._options
    }

    get results() {
        return this._options.reduce((prev, curr) => {
            for (let prop in curr.results) {
                prev[prop] =
                    (prev[prop] ?? 0)
                    + curr.results[prop]
            }
            return prev
        }, {})
    }

    get label() {
        return this._label
    }

    get title() {
        return this._title
    }

    get tip() {
        return this._tip
    }

    /**
     *
     * @param title question text
     * @param label a, b, or 1, 2...
     * @param tip additional info
     * @param answers list of answers
     * @param multiple multiple or simple choice
     * @param labelType
     * @param quiz {Quiz}
     * @param component
     */
    constructor({title, label, tip = "", answers = {}, multiple = false,
                    labelType = 'a', quiz, component = null}) {
        this._title = title
        this._tip = tip
        this._labelType = labelType
        this._label = label
        this._multiple = multiple
        this._quiz = quiz
        this.options = answers
        this._component = component
    }

    get component() {
        return this._component
    }

}

export default GenericProxy(Card)
