<template>
  <div class="box1">
    <!-- <el-form label-width="120px">
      <el-form-item label="用户名">
        <el-input v-model="loginForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="loginForm.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button style="width:100%" type="primary" @click="submitLogin">点击</el-button>
      </el-form-item>
    </el-form> -->
    <el-button style="width:100%" type="primary" @click="submitLogin">点击</el-button>
  </div>

</template>

<script setup lang="ts">
  import axios from 'axios'
  import { ref, reactive } from 'vue'


  const loginForm = reactive({
    username: "",
    password: ""
  })

  // 点击登录执行的方法
  const submitLogin = () => {
    console.log('点击了,', loginForm)



    // 登录的post请求
    const res = axios.post('https://dashscope.aliyuncs.com/api/v1/services/aigc/text-generation/generation', {
      model: "qwen-turbo",
      input: {
        messages: [
          {
            role: "system",
            content: "You are a helpful assistant."
          },
          {
            role: "user",
            content: "你好，哪个公园距离我最近？"
          }
        ]
      },
      parameters: {
        result_format: "text"
      }
    }, {
      headers: {
        'Authorization': 'Bearer sk-PZlxBLdjwb',
        'Content-Type': 'application/json'
      }
    })



    console.log('@@@res', res)

    // 设置回调函数，接收返回的响应对象
    // 异步操作成功时，执行的回调函数
    res.then(response => {
      console.log('请求成功:')
      console.log('respnse', response)
    })
    // 异步操作失败时，执行的回调函数
    res.catch(error => {
      console.log('请求失败:')
      // console.log('error:',error)
      console.log('请求失败响应对象获取', error.response)
    })
  }
</script>

<style></style>
