import {createApp} from 'vue'
import App from './App.vue'
import qs from 'qs'
import lsManager from '@kebab-case/ls-manager'

let gaData = `https://www.googletagmanager.com/gtag/js?id=VUE_APP_GA`

if (process.env.VUE_APP_GA) {
    gaData = gaData.replace(/VUE_APP_GA/g, process.env.VUE_APP_GA)
    window.dataLayer = window.dataLayer || []
    window.gtag = function () {
        window.dataLayer.push(arguments)
    }
    window.gtag('js', new Date())
    window.gtag('config', process.env.VUE_APP_GA)
}

// let gaExcluded = false

const ls = lsManager()

if (qs.parse(document.location.href.split('?', 2)[1])['test'] !== undefined) {
    // gaExcluded = true
    ls.setItem('GA-excluded', true)
}

let gaExcluded = localStorage.getItem('GA-excluded')

if (!gaExcluded) {
    const script = document.createElement('script')
    script.src = gaData
    script.setAttribute('async', 'async')
    const head = document.querySelector('head')
    head.insertBefore(script, head.firstChild)
}

createApp(App).mount('#app')