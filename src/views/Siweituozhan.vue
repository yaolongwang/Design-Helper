<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <h2>思维拓展</h2>
      </el-header>
      <el-main>
        <div class="juzhong">

          <div justify="center">

            <!-- 输入框 -->
            <el-input v-model="shejineirong" style="width: 485px" size="large" placeholder="输入设计内容" clearable />
            <!-- 分隔 -->
            <span style="margin: 0 10px" />
            <!-- 按钮 -->
            <el-button type="success" size="large" plain @click="getLingan">思维拓展</el-button>

            <!-- 返回内容的框 -->
            <div style="margin: 16px 0" />
            <el-input v-model="lingan" style="width: 600px" :autosize="{ minRows: 6, maxRows: 18 }" type="textarea"
              placeholder="这里会显示思维拓展后的内容" />

          </div>
        </div>

      </el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">
  import { ref, reactive } from 'vue'
  import axios from 'axios'
  //hooks
  import useSiweituozhan from '@/hooks/useSiweituozhan'
  const { shejineirong, lingan, getLingan } = useSiweituozhan()

</script>

<style scoped>
  h2 {
    text-align: center;
  }

  el-header {
    text-align: center;
  }

  el-container {
    display: flex;
  }

  el-main {
    /* 中心排列 */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .juzhong {
    /* 上、左右、下 */
    margin: 10px auto auto;
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