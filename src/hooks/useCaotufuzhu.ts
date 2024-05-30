import { ref, reactive, computed } from 'vue'
import axios from 'axios' //引入axios库
import { useApiStore } from "@/stores/api"  //引入apiStore

export default function () {
  const apiStore = useApiStore()  //使用apiStore
  //数据！！！
  //输入的草图设计主题
  const sketchName = ref('')

  //最后返回的prompt
  const prompt = ref('')

  //方法！！！
  // 按钮点击事件：中文prompt
  const cnPrompt = () => {
    console.log('生成中文prompt!,按钮点击成功！')
    console.log('模型：', apiStore.moxing)

    //合成草图主题文字
    const caotuzhuti = computed(() => {
      return `用户输入的设计草图主题是：${sketchName.value}`;
    });

    //系统角色 中文
    const systemcn = "根据用户输入的设计草图主题，生成一段可用于人工智能文生图的中文prompt。在生成中文prompt时，确保其能够清晰地传达出设计草图的主题和要素，包括颜色、元素、风格等。同时，也要考虑到如何让AI模型能够准确地理解和描绘出设计草图的细节和特点。注意！只能输出中文prompt，不能输出多余的文字。"

    //请求体 中文
    const qingqiuticn = {
      model: apiStore.moxing,
      input: {
        messages: [
          {
            role: "system",
            content: systemcn
          },
          {
            role: "user",
            content: caotuzhuti.value
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
    console.log('输入的内容是：', sketchName.value)
    console.log('请求体是：', qingqiuticn)

    // axios向通义千问发送post请求
    // 在使用Vite配置代理的情况下，修改axios请求,解决跨域问题
    const postcnprompt = axios.post('/api/v1/services/aigc/text-generation/generation', qingqiuticn, qingqiutou);

    console.log('返回的对象是：', postcnprompt)

    // 设置回调函数，接收返回的响应对象
    postcnprompt.then(response => {
      // 异步操作成功时，执行的回调函数
      console.log('请求成功:')
      console.log('respnse', response)
      // 把结果返回公屏
      prompt.value = response.data.output.text;
    }).catch(error => {
      // 异步操作失败时，执行的回调函数
      console.log('请求失败:')
      console.log('请求失败响应对象获取', error.response)
    })
  }

  // 按钮点击事件：英文prompt
  const enPrompt = () => {
    console.log('生成英文prompt!,按钮点击成功！')
    console.log('模型：', apiStore.moxing)

    //合成草图主题文字
    const caotuzhuti = computed(() => {
      return `用户输入的设计草图主题是：${sketchName.value}`;
    });

    //系统角色 英文
    const systemen = "根据用户输入的设计草图主题，生成一段可用于人工智能文生图的英文prompt。在生成英文prompt时，确保其能够清晰地传达出设计草图的主题和要素，包括颜色、元素、风格等。同时，也要考虑到如何让AI模型能够准确地理解和描绘出设计草图的细节和特点。注意！只能输出英文prompt，不能输出多余的文字。"

    //请求体 英文
    const qingqiutien = {
      model: apiStore.moxing,
      input: {
        messages: [
          {
            role: "system",
            content: systemen
          },
          {
            role: "user",
            content: caotuzhuti.value
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
    console.log(sketchName.value)
    console.log('@@@请求体是：', qingqiutien)

    // axios向通义千问发送post请求
    const postenprompt = axios.post('/api/v1/services/aigc/text-generation/generation', qingqiutien, qingqiutou)

    console.log('返回的对象是：', postenprompt)

    // 设置回调函数，接收返回的响应对象
    postenprompt.then(response => {
      // 异步操作成功时，执行的回调函数
      console.log('请求成功:')
      console.log('respnse', response)
      // 把结果返回公屏
      prompt.value = response.data.output.text;
    }).catch(error => {
      // 异步操作失败时，执行的回调函数
      console.log('请求失败:')
      console.log('请求失败响应对象获取', error.response)
    })
  }

  //返回！！！
  return {
    sketchName,
    cnPrompt,
    enPrompt,
    prompt
  }
}