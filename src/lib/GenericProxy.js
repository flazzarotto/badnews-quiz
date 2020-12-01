import {reactive} from 'vue'

export function isFunction(functionToCheck) {
    return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]'
}


export default function (Class, isReactive = false) {
    return function () {
        let object = new Class(...arguments)

        if (isReactive) {
            object = reactive(object)
        }

        const proxy = new Proxy(object, {
            get(target, prop) {
                return target[prop]
            },
            set(target, prop) {
                if (prop.indexOf('_') === 0) {
                    throw new Error(`Property ${prop} of ${target} of ${Class} is readonly`)
                }
                return Reflect.set(...arguments)
            }
        })
        if (object._mutations) {
            proxy.mutations = object._mutations(object)
        }
        return proxy
    }
}
