import './assets/styles/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import animate from './directives/animate.js'

const app = createApp(App)
app.directive('animate', animate)
app.mount('#app')
