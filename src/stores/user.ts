import { defineStore } from 'pinia' //引入pinia
import { ref } from 'vue'

//定义并暴露一个store
export const useUserStore = defineStore('user', () => {

  const nicheng = ref<string>('小王')
  const xuexiao = ref<string>('')

  // 返回数据
  return { nicheng, xuexiao }
})
