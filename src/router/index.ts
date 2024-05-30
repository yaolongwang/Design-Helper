// 引入createRouter
import { createRouter, createWebHistory } from 'vue-router'
// 引入一个一个可能要呈现的路由组件
import Siweituozhan from '@/views/Siweituozhan.vue'
import Fanganshengcheng from '@/views/Fanganshengcheng.vue'
import Shujufenxi from '@/views/Shujufenxi.vue'
import Yaosuchaijie from '@/views/Yaosuchaijie.vue'
import Caotufuzhu from '@/views/Caotufuzhu.vue'
import Setting from '@/views/Setting.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),//路由器工作模式：history模式
  routes: [ //一个一个的路由规则
    {
      path: '/siweituozhan',
      name: 'siweituozhan',
      component: Siweituozhan
    },
    {
      path: '/fanganshengcheng',
      name: 'fanganshengcheng',
      component: Fanganshengcheng
    },
    {
      path: '/shujufenxi',
      name: 'shujufenxi',
      component: Shujufenxi
    },
    {
      path: '/yaosuchaijie',
      name: 'yaosuchaijie',
      component: Yaosuchaijie
    },
    {
      path: '/caotufuzhu',
      name: 'caotufuzhu',
      component: Caotufuzhu
    },
    {
      path: '/setting',
      name: 'setting',
      component: Setting
    }
  ]
})
//默认暴露router
export default router
