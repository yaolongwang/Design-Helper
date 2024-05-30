import { ref, reactive, computed } from 'vue'
import axios from 'axios' //引入axios库
import { useApiStore } from "@/stores/api" // 引入apiStore

export default function () {
  const apiStore = useApiStore()  //使用apiStore

  //数据！！！
  // 问卷表单
  const wenjuanform = reactive({
    subject: '',  // 调研主题
    number: 18,   // 问卷题数
    aim: '',      // 调研目的
  })

  //最后返回的：生成问卷
  const wenjuan = ref('')


  //方法！！！
  //按钮点击事件：生成问卷
  const createWenjuan = () => {
    console.log('生成问卷，按钮点击成功！')
    console.log('模型：', apiStore.moxing)

    //合并表单数据
    const wenjuanbiaodan = computed(() => {
      return `设计调研问卷的调研主题是：${wenjuanform.subject}，问卷题数是：${wenjuanform.number}，调研目的是：${wenjuanform.aim}。严格根据这些要求设计一份设计调研问卷，要加上开头的问卷声明。`;
    });

    //系统角色
    const system = "你是一个资深设计师。请根据要求生成一份详尽的设计调研问卷。在创建问卷时，请确保问题清晰、简洁，易于理解，且具有一定的引导性，以便获得准确、有效的反馈信息。同时，也请考虑到问卷的可扩展性，以便在未来需要时能够方便地添加新的问题。"
    //请求体
    const qingqiuti = {
      model:apiStore.moxing,
      input: {
        messages: [
          {
            role: "system",
            content: system
          },
          {
            role: "user",
            content: wenjuanbiaodan.value
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
    console.log('输入的内容是：',wenjuanbiaodan.value)
    console.log('请求体是：', qingqiuti)

    // axios向通义千问发送post请求
    // const postwenjuan = axios.post('https://dashscope.aliyuncs.com/api/v1/services/aigc/text-generation/generation', qingqiuti, qingqiutou)
    const postwenjuan = axios.post('/api/v1/services/aigc/text-generation/generation', qingqiuti, qingqiutou)

    console.log('返回的对象是：', postwenjuan)

    // 设置回调函数，接收返回的响应对象
    postwenjuan.then(response => {
      // 异步操作成功时，执行的回调函数
      console.log('请求成功:')
      console.log('respnse', response)
      // 把结果返回公屏
      wenjuan.value = response.data.output.text;
    }).catch(error => {
      // 异步操作失败时，执行的回调函数
      console.log('请求失败:')
      console.log('请求失败响应对象获取', error.response)
    })
  }

  //返回！！！
  return {
    wenjuanform,
    createWenjuan,
    wenjuan
  }
}