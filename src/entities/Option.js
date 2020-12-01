import GenericProxy from "@/lib/GenericProxy"

function resultDataTransform(results) {
    if (typeof results !== 'object') {
        results = [results]
    }
    if (Array.isArray(results)) {
        let r = {}
        for (let prop of results) {
            r[prop] = 1
        }
        results = r
    }
    return results
}

class Option {
    _checked

    _mutations(option) {
        return {
            /**
             * @param checked {boolean}
             */
            check: (checked) => {
                option._checked = checked
            }
        }
    }

    get checked() {
        return this._checked
    }

    get results() {
        if (this._checked !== false && this._checked !== true) {
            return {}
        }
        return this._checked ? this._results : this._resultsNotChecked
    }

    set results(results) {
        this._results = resultDataTransform(results)
    }

    set resultsNotChecked(resultsNotChecked) {
        this._resultsNotChecked = resultDataTransform(resultsNotChecked)
    }

    get text() {
        return this._text
    }

    get label() {
        return this._label
    }

    get simpleLabel() {
        return this.label.replace(/[^A-Z0-9]/ig, '')
    }

    get multiple() {
        return this._multiple
    }

    constructor({results, text, resultsNotChecked = {}, multiple = false, label, quiz}) {
        this._text = text
        this.results = results
        this.resultsNotChecked = resultsNotChecked
        this._multiple = multiple
        this._label = label
        this._quiz = quiz
    }
}

export default GenericProxy(Option, true)