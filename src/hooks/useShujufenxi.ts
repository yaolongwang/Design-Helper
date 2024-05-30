import { ref, reactive } from 'vue'
import axios from 'axios' //引入axios库
import { useApiStore } from "@/stores/api" // 引入apiStore

export default function () {
  const apiStore = useApiStore()  //使用apiStore

  //数据！！！
  // 输入框：调研结果
  const diaoyanjieguo = ref('')

  // 输出框：分析结果
  const fenxijieguo = ref('')


  //方法！！！
  // 按钮点击事件：开始分析
  const startFenxi = () => {
    console.log('开始分析!，按钮点击成功！')
    console.log('模型：', apiStore.moxing)

    //系统角色
    const system = "你是一个资深设计师和数据分析师。请分析以下的设计调研结果，包括问卷结果或访谈结果，并得出相应的调研结论。并给出具有实用价值的设计建议，以指导进一步的设计工作。注意!只输出调研结果、调研结论、设计建议，不要输出别的话语。"
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
            content: diaoyanjieguo.value
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
    console.log('输入的内容是：',diaoyanjieguo.value)
    console.log('请求体是：', qingqiuti)

    // axios向通义千问发送post请求
    // const postfenxijieguo = axios.post('https://dashscope.aliyuncs.com/api/v1/services/aigc/text-generation/generation', qingqiuti, qingqiutou)
    const postfenxijieguo = axios.post('/api/v1/services/aigc/text-generation/generation', qingqiuti, qingqiutou)

    console.log('返回的对象是：', postfenxijieguo)

    // 设置回调函数，接收返回的响应对象
    postfenxijieguo.then(response => {
      // 异步操作成功时，执行的回调函数
      console.log('请求成功:')
      console.log('respnse', response)
      // 把结果返回公屏
      fenxijieguo.value = response.data.output.text;
    }).catch(error => {
      // 异步操作失败时，执行的回调函数
      console.log('请求失败:')
      console.log('请求失败响应对象获取', error.response)
    })
  }

  //返回！！！
  return {
    diaoyanjieguo,
    fenxijieguo,
    startFenxi,
  }
}