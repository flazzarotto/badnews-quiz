import { createApp } from 'vue'
import App from './App.vue'
import qs from 'qs'

let gaData = `<script async src="https://www.googletagmanager.com/gtag/js?id=VUE_APP_GA"></script> +
        <script>window.dataLayer = window.dataLayer || []; +
            function gtag() {
                dataLayer.push(arguments);
            }
            gtag('js', new Date());
            gtag('config', 'VUE_APP_GA');</script>`

if (process.env.VUE_APP_GA) {
    gaData = gaData.replace('VUE_APP_GA', process.env.VUE_APP_GA)
}

if (qs.parse(document.location.href.split('?',2)[1])['test'] !== undefined) {
    gaData = ['<!-- ',' -->'].join(gaData)
}

document.querySelector('head').innerHTML += gaData

createApp(App).mount('#app')
