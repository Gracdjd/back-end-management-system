import { createApp } from 'vue'
import './style.css'
import App from '@/App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

import 'virtual:svg-icons-register'
import globalComponent from '@/components/index.ts'
import router from './routers'
// console.log(globalComponent)

const app = createApp(App)
app.use(ElementPlus, {
  locale: zhCn,
})
app.use(globalComponent)
app.use(router)
app.mount('#app')

console.log(import.meta.env)
