import { defineStore } from 'pinia'

export const useApiStore = defineStore('api', () => {

  // https://bailian.console.aliyun.com/#/model-market
  // 可以选择的模型：通义千问 / 百川 / llama3(中文不好)
  // qwen-max（免费额度已到期）
  // ------------以下免费额度有效期：2024-09-12------------
  // qwen-plus
  // qwen-turbo
  // qwen-7b-chat
  // qwen-14b-chat
  // baichuan2-7b-chat-v1
  // baichuan2-13b-chat-v1
  // llama2-7b-chat-v2
  // llama2-13b-chat-v2
  // ------------以下限时免费（没说时间）------------
  // qwen-1.8b-chat
  // qwen-1.8b-longcontext-chat（正在申请中） 
  // chatglm3-6b（比较笨）
  // llama3-8b-instruct（免费额度有效期：2024-10-17）
  // llama3-70b-instruct（免费额度有效期：2024-10-17）

  const moxing: string = "qwen-plus"
  // const moxing: string = "baichuan2-13b-chat-v1"
  // const moxing: string = "llama3-70b-instruct"
  // const moxing: string = "chatglm3-6b"



  //使用的API Key
  //Bearer <your-dashscope-api-key>
  const apikey: string = "Bearer 在这里填入你的API密钥"

  return { moxing, apikey }
})
