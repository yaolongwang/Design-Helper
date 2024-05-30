<template>
  <el-container>
    <el-header>
      <h2>草图辅助</h2>
    </el-header>
    <el-main>

      <div class="juzhong">
        <el-form label-width="auto" style="max-width: 600px" size="large">
          <!-- 输入框 -->
          <el-form-item label="草图主题">
            <el-input v-model="sketchName" placeholder="请输入你的设计主题" />
          </el-form-item>
          <!-- 按钮 -->
          <el-form-item>
            <div class="anniu">
              <el-button type="primary" @click="cnPrompt">生成中文prompt</el-button>
              <el-button type="primary" @click="enPrompt">生成英文prompt</el-button>
            </div>
          </el-form-item>
        </el-form>

        <!-- 返回内容的框 -->
        <!-- <br> -->
        <div style="margin: 32px 0" />
        <el-input v-model="prompt" style="width: 600px" :autosize="{ minRows: 2, maxRows: 18 }" type="textarea"
          placeholder="这里会显示生成的prompt" />

        <!-- 按钮 -->
        <div class="center">
          <div style="margin: 8px 0" />
          <div class="anniu">
            <el-button type="success" plain @click="copyPrompt" size="large">复制prompt</el-button>
          </div>
          <div style="margin: 8px 0" />
        </div>

      </div>

    </el-main>
  </el-container>
</template>

<script setup lang="ts">
  import { ref, reactive } from 'vue'

  //hooks
  import useCaotufuzhu from '@/hooks/useCaotufuzhu'
  const { sketchName, cnPrompt, enPrompt, prompt } = useCaotufuzhu()

  // 按钮点击事件：复制结果
  const copyPrompt = () => {
    let resultprompt = prompt.value
    // 把resultprompt复制到剪贴板,并保留换行
    const el = document.createElement('textarea')
    el.value = resultprompt
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
    console.log('已将prompt复制到剪贴板!')
  }
</script>

<style scoped>
  h2 {
    text-align: center;
  }

  .juzhong {
    /* 上、左右、下 */
    margin: 10px auto auto;
  }

  .center {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .el-main {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .anniu {
    margin: auto;
  }

</style>