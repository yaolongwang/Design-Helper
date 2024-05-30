<template>
  <div class="centered-container">
    <el-card style="max-width: 480px">
      <template #header>
        <div class="card-header">
          <span>我的</span>
        </div>
      </template>
      <!-- 身体 -->
      <div> 昵称 </div>
      <el-input class="input" v-model="nicheng1" style="width: 240px" placeholder="" />
      <div class="br"></div>
      <div> 学校/公司 </div>
      <el-input class="input" v-model="xuexiao1" style="width: 240px" placeholder="" />
      <!-- 脚 -->
      <template #footer>
        <div class="footwai">
          <div class="foot"><el-button class="btn" type="primary" @click="wancheng" size="medium">完成</el-button></div>
          <div class="foot"><el-button class="btn" type="danger" @click="tuichu" size="medium">退出</el-button></div>
        </div>
      </template>
    </el-card>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  import { useUserStore } from "@/stores/user"; // 引入userStore
  const userStore = useUserStore()  //使用userStore
  
  console.log('用户昵称：', userStore.nicheng)
  console.log('学校/公司：', userStore.xuexiao)

  //输入框
  const nicheng1 = ref('')
  const xuexiao1 = ref('')

  //按钮点击事件：完成
  const wancheng = () => {
    userStore.nicheng = nicheng1.value
    userStore.xuexiao = xuexiao1.value
    console.log('完成!')
  }
  //按钮点击事件：退出
  const tuichu = () => {

    console.log('退出!')
  }

</script>

<style scoped>
  .centered-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
  }

  el-card {
    min-width: 800px;
    /* 设置更大的宽度值，例如800px */
  }

  span {
    font-size: 22px;
    font-weight: 600;
  }

  .card-header {
    /* 居中 */
    text-align: center;
  }

  .br {
    margin-top: 16px;
  }

  .input {
    margin-top: 8px;
  }

  .footwai {
    display: flex;
    flex-direction: column;
    /* 让子元素垂直排列 */
    align-items: center;
    /* 沿水平方向居中对齐 */
  }

  .foot {
    /* 外边距 */
    margin-top: 12px;
  }

  .btn {
    /* 按钮宽度 */
    width: 240px;
  }
</style>