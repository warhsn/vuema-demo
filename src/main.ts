import { createApp } from "vue"
import { createPinia } from "pinia"
import hljsVuePlugin from "@highlightjs/vue-plugin";
import App from "./App.vue"
import router from "./router"
import VueBulma from '@billow/vue-bulma'
import "./assets/theme/app.scss"
import '../node_modules/@billow/vue-bulma/dist/style.css'
import 'highlight.js/styles/github-dark.css'
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript'
import typescript from 'highlight.js/lib/languages/typescript'
import html from 'highlight.js/lib/languages/xml'
import './icons'

hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('typescript', typescript)
hljs.registerLanguage('html', html)
const app = createApp(App)

app.use(VueBulma)
app.use(createPinia())
app.use(router)
app.use(hljsVuePlugin)

app.mount("#app")