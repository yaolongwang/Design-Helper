import { ref, reactive, computed } from 'vue'
import axios from 'axios' //引入axios库
import { useApiStore } from "@/stores/api" // 引入apiStore

export default function () {
  const apiStore = useApiStore()  //使用apiStore
  //数据！！！
  // 访谈表单
  const fangtanform = reactive({
    subject: '',  // 访谈主题
    type: '',     // 访谈类型
    number: 10,   // 问题数量
  })

  //最后返回的：生成访谈
  const fangtan = ref('')


  //方法！！！
  //按钮点击事件：生成访谈
  const createFangtan = () => {
    console.log('生成访谈，按钮点击成功！')
    console.log('模型：', apiStore.moxing)

    //合并表单数据
    const fangtanbiaodan = computed(() => {
      return `用户访谈大纲的访谈主题是：${fangtanform.subject}，访谈类型是：${fangtanform.type}，问卷数量是：${fangtanform.number}。严格根据这些要求设计一份访谈大纲。`;
    });

    //系统角色
    const system = "你是一个资深设计师。你要根据用户的要求生成一份用户访谈大纲。请确保访谈大纲的条理清晰，问题具体，以便于进行深入的用户洞察。同时，你还应该考虑到如何引导用户进行深入的讨论，以便获取更有价值的信息。"
    //请求体
    const qingqiuti = {
      model: apiStore.moxing,
      input: {
        messages: [
          {
            role: "system",
            content: system
          },
          {
            role: "user",
            content: fangtanbiaodan.value
          }
        ]
      },
      parameters: {
        result_format: "text"
      }
    }
    //请求头
    const qingqiutou = {
      headers: {
        'Authorization': apiStore.apikey,
        'Content-Type': 'application/json'
      }
    }

    //打印检查
    console.log('输入的内容是：',fangtanbiaodan.value)
    console.log('请求体是：', qingqiuti)

    // axios向通义千问发送post请求
    // const postfangtan = axios.post('https://dashscope.aliyuncs.com/api/v1/services/aigc/text-generation/generation', qingqiuti, qingqiutou)
    const postfangtan = axios.post('/api/v1/services/aigc/text-generation/generation', qingqiuti, qingqiutou)


    console.log('返回的对象是：', postfangtan)

    // 设置回调函数，接收返回的响应对象
    postfangtan.then(response => {
      // 异步操作成功时，执行的回调函数
      console.log('请求成功:')
      console.log('respnse', response)
      // 把结果返回公屏
      fangtan.value = response.data.output.text;
    }).catch(error => {
      // 异步操作失败时，执行的回调函数
      console.log('请求失败:')
      console.log('请求失败响应对象获取', error.response)
    })
  }

  //返回！！！
  return {
    fangtanform,
    createFangtan,
    fangtan
  }
}