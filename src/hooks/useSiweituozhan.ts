import { ref, reactive } from 'vue'
import axios from 'axios' //引入axios库
import { useApiStore } from "@/stores/api" // 引入apiStore

export default function () {
  const apiStore = useApiStore()  //使用apiStore
  // moxing, apikey
  // console.log('模型：', apiStore.moxing)
  // console.log('密钥：', apiStore.apikey)

  //数据！！！
  //输入框：设计内容
  const shejineirong = ref('')
  //最后的返回值：灵感  
  const lingan = ref('')

  //方法！！！
  // 按钮点击事件：思维拓展：获取灵感
  const getLingan = () => {
    console.log('思维拓展按钮，点击成功！')
    console.log('模型：', apiStore.moxing)

    //系统角色
    const system = "你是一个资深设计师。我们正在做设计的第一步：头脑风暴。下一次对话我会给你一个词，你要根据这个词做思维拓展。"
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
            content: shejineirong.value
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
    console.log('输入的内容是：',shejineirong.value)
    console.log('请求体是：', qingqiuti)

    // axios向通义千问发送post请求
    // const postlingan = axios.post('https://dashscope.aliyuncs.com/api/v1/services/aigc/text-generation/generation', qingqiuti, qingqiutou)
    const postlingan = axios.post('/api/v1/services/aigc/text-generation/generation', qingqiuti, qingqiutou)

    console.log('返回的对象是：', postlingan)

    // 设置回调函数，接收返回的响应对象
    postlingan.then(response => {
      // 异步操作成功时，执行的回调函数
      console.log('请求成功:')
      console.log('respnse', response)
      // 把结果返回公屏
      lingan.value = response.data.output.text;
    }).catch(error => {
      // 异步操作失败时，执行的回调函数
      console.log('请求失败:')
      console.log('请求失败响应对象获取', error.response)
    })
  }

  // 返回值！！！
  return {
    shejineirong,
    lingan,
    getLingan
  }
}