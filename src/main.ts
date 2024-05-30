import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'  //导入 ElementPlus 组件库的所有模块和功能 
import 'element-plus/dist/index.css'    //导入 ElementPlus 组件库所需的全局 CSS 样式
import * as ElementPlusIconsVue from '@element-plus/icons-vue' //导入 ElementPlus 组件库中的所有图标

const app = createApp(App)

app.use(createPinia())//使用菠萝
app.use(router) //使用路由器
//注册 ElementPlus 组件库中的所有图标到全局 Vue 应用中
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(ElementPlus)
app.mount('#app')   //挂载整个应用到app容器中
