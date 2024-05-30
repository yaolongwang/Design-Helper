import { ref, reactive, computed } from 'vue'
import axios from 'axios' //引入axios库
import { useApiStore } from "@/stores/api" // 引入apiStore

export default function () {
  const apiStore = useApiStore()  //使用apiStore
  //数据！！！
  //表单数据：要素：设计内容、设计类别
  const yaosuform = reactive({
    content: '',
    class: '',
  })

  //最后的返回值：拆解出的
  const chaijiechude = ref('')


  //方法！！！
  // 按钮点击事件：拆解
  const chaiJie = () => {
    console.log('拆解，按钮点击成功！')
    console.log('模型：', apiStore.moxing)

    //合并表单数据
    const yaosubiaodan = computed(() => {
      return `设计类别是：${yaosuform.class}，要设计内容是：${yaosuform.content}。请直接拆解设计元素。`;
    });
    //系统角色
    const system = "你是一个资深设计师。当用户提出其所需设计的具体内容后，你将提出专业建议，拆解出设计要素：针对产品设计，你要依据设计师需求解析出目标产品的核心功能架构及其内部结构布局；针对视觉传达设计，你要深入剖析并构建出目标设计方案中各关键视觉元素的组成；针对环境设计，你要细化目标空间的功能区域划分与规划布局，确保空间利用的合理性和用户体验的舒适度；针对交互和UI设计，你要分析出适合目标设计的结构和框架划分。"
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
            content: yaosubiaodan.value
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
    console.log('输入的内容是：',yaosubiaodan.value)
    console.log('请求体是：', qingqiuti)
    

    // axios向通义千问发送post请求
    // const postchaijiechude = axios.post('https://dashscope.aliyuncs.com/api/v1/services/aigc/text-generation/generation', qingqiuti, qingqiutou)
    const postchaijiechude = axios.post('/api/v1/services/aigc/text-generation/generation', qingqiuti, qingqiutou)

    console.log('返回的对象是：', postchaijiechude)

    // 设置回调函数，接收返回的响应对象
    postchaijiechude.then(response => {
      // 异步操作成功时，执行的回调函数
      console.log('请求成功:')
      console.log('respnse', response)
      // 把结果返回公屏
      chaijiechude.value = response.data.output.text;
    }).catch(error => {
      // 异步操作失败时，执行的回调函数
      console.log('请求失败:')
      console.log('请求失败响应对象获取', error.response)
    })
  }

  //返回！！！
  return {
    yaosuform,
    chaijiechude,
    chaiJie
  }
}