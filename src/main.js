import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {useRem} from './utils/flexible'
import libs from './libs'
import store from './store'
import 'virtual:svg-icons-register'
import './styles/index.scss'
import { useTheme } from './utils/theme'

useRem()
useTheme()
createApp(App).use(router).use(store).use(libs).mount('#app')
